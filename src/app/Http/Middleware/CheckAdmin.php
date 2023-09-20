<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CheckAdmin
{
    public function handle(Request $request, Closure $next)
    {
        // Check if the user's username is not 'smk110'
        if(auth()->user()?->username !== 'smk110') {
            Log::error('Access denied: User does not have admin privileges.');
            abort(Response::HTTP_FORBIDDEN);
        }
        return $next($request);
    }
}
