<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\AdminPostController;
use App\Http\Controllers\PostCommentsController;
use App\Http\Controllers\NewsletterController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\LoginController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ddd;
use Inertia\Inertia;
use App\Models\Post;
use App\Models\Category;
use App\Models\User;
use App\Services\Newsletter;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [PostController::class, 'index'])->name('home');

Route::get('/posts/{post:slug}', [PostController::class, 'show']);

Route::get('/categories/{category:slug}', function(Category $category) {
    $category->load(['posts.category', 'posts.author']);
    return Inertia::render('Posts', [
        'posts_data' => $category->posts,
        'categories' => Category::all(),
    ]);
});

Route::post('newsletter', NewsletterController::class);

Route::get('/author/{author:username}', function(User $author) {
    $author->load(['posts.category', 'posts.author']);

    return Inertia::render('Posts', [
        'posts_data' => $author->posts,
        'categories' => Category::all(),
    ]);
});

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function() {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function() {
    Route::post('/posts/{post:slug}/comments', [PostCommentsController::class, 'store']);
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('checkAdmin')->group(function() {
    Route::get('/admin/posts/create', [AdminPostController::class, 'create']);
    Route::get('/admin/posts', [AdminPostController::class, 'index'])->name('admin.posts.index');
    Route::get('/admin/posts/{post:id}/edit', [AdminPostController::class, 'edit']);
    Route::post('/admin/posts', [AdminPostController::class, 'store']);
    Route::put('/admin/posts/{id}/update', [AdminPostController::class, 'update'])->name('admin.posts.update');
    Route::delete('/admin/posts/{id}/delete', [AdminPostController::class, 'destroy']);
});


require __DIR__.'/auth.php';