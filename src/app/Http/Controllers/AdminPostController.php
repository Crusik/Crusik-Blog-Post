<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Post;
use App\Models\Comment;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Pagination\Paginator;
use Illuminate\Http\Response;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class AdminPostController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    
    public function index()
    {
        $posts_data = Post::latest()->get();

        return Inertia::render('Admin/Posts/AdminPost', [
            'posts_data' => $posts_data,
        ]);
    }
    
    public function create()
    {
        return Inertia::render('Admin/Posts/CreatePost', [
            'categories' => Category::all(),
        ]);
    }
    
    public function store()
    {
        $attributes = request()->validate([
            'title' => 'required',
            'thumbnail' => 'required|file',
            'slug' => ['required', Rule::unique('posts', 'slug')],
            'excerpt' => 'required',
            'body' => 'required',
            'category_id' => ['required', Rule::exists('categories', 'id')]
        ]);
        
        $attributes['user_id'] = auth()->id();
        
        $thumbnailPath = explode('/', request()->file('thumbnail')->store('public/thumbnails'));
        $attributes['thumbnail'] = end($thumbnailPath);

        Post::create($attributes);
        
        return redirect('/');
    }

    public function edit(Post $post)
    {
        return Inertia::render('Admin/Posts/Edit_Post', [
            'blog' => $post,
            'categories' => Category::all(),
        ]);
    }
    
    public function update(Request $request, string $id)
    {
        $data = [
            'formData' => $request->all(),
            'post' => Post::findOrFail($id)
        ];
        unset($data['formData']['data']);
        if($request->file('thumbnail')) {
            $validator = Validator::make($data['formData'], [
            'thumbnail' => 'file',
            ]);
        }

        $rules = [
            'title' => 'required',
            'slug' => ['required', Rule::unique('posts', 'slug')->ignore($data['post']->id)],
            'excerpt' => 'required',
            'body' => 'required',
            'category_id' => ['required', Rule::exists('categories', 'id')]
        ];

        if(request()->file('thumbnail')) $rules['thumbnail'] = 'required|file';
        
        $validator = Validator::make($data['formData'], $rules);
        
        if($validator->fails()) return back()->withErrors($validator, 'post');

        if(request()->file('thumbnail')){
            $data['formData']['thumbnail'] = explode('/', request()->file('thumbnail')->store('public/thumbnails'));
            $data['formData']['thumbnail'] = end($data['formData']['thumbnail']);
        }
        
        $data['post']->update($data['formData']);

        return back()->with('success', 'Post Updated');
    }
    

    public function destroy($id)
    {
        $post = Post::findOrFail($id);
        $post->delete();

        return redirect()->route('admin.posts.index')->with('success', 'Post deleted successfully.');
    }
}
