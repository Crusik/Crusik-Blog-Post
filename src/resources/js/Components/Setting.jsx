import { usePage } from '@inertiajs/react';
import React from 'react';

export default function Setting({ children, heading }) {
    const { ziggy } = usePage().props;
    return (
        <section className="mt-20 py-8 max-w-4xl mx-auto">
            <h1 className="text-lg text-center font-bold mb-8 pb-2 border-b border-gray-400">
                {heading}
            </h1>
            <div className="flex">
                <aside className="w-48 flex-shrink-0">
                    <h4 className="px-2 font-semibold mb-4">Links</h4>
                    <ul>
                        <li className='mb-2'>
                            <a href="/admin/posts"
                            className={`p-2 ${ziggy.uri === '/admin/posts' ? 'bg-green-200 rounded-md' : ''}`}
                            >
                                All Posts
                            </a>
                        </li>
                        <li className='mb-2'>
                            <a href="/admin/posts/create"
                            className={`p-2 ${ziggy.uri === '/admin/posts/create' ? 'bg-green-200 rounded-md' : ''}`}
                            >
                                New Post
                            </a>
                        </li>
                    </ul>
                </aside>
                <main className="flex-1 bg-gray-100 rounded-xl">
                    <div className="border border-gray-400 p-6 rounded-xl">
                        {children}
                    </div>
                </main>
            </div>
        </section>
    );
}