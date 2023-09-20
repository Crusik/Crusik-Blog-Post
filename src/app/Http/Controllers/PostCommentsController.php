<?php

namespace App\Http\Controllers;
use App\Models\Post;
use App\Models\Comment;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

use Illuminate\Http\Request;

class PostCommentsController extends Controller
{
    public function store(Post $post)
    {
        request()->validate([
            'body' => 'required'
        ]);
        
        $post->comments()->create([
            'user_id' => request()->user()->id,
            'body' => request('body')
        ]);
        return back();
    }
}
