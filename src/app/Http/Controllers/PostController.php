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



class PostController extends Controller
{    
    public function index()
    {
    $posts = Post::with(['category', 'author'])->latest()->paginate(10);

    return Inertia::render('Posts', [
        'posts_data' => Post::latest()->filter(
            request(['search', 'category', 'author']))->get(),
        'categories' => Category::all(),
        'session' => session()->all(),
    ]);
    }
    
    public function show(Post $post)
    {
        $post->load(['category', 'author', 'comments.author']);
        return Inertia::render('Post', [
            'post_data' => $post,
            'comments' => $post->comments,
        ]);
    }
}
