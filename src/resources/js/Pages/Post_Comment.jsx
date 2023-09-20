import { useForm } from '@inertiajs/react';

export default function Post_Comment({comments, post_data}) {
    const { data, setData, post, processing, errors } = useForm({
        body: "",
    });
    
    const handleSubmit = (event) => {
        event.preventDefault();

        post(`/posts/${post_data.slug}/comments`, data);
    };    

    return (
        <>
            <form onSubmit={handleSubmit} action={`/posts/${post_data.slug}/comments`} className="border border-gray-200 p-6 rounded-xl">
                <header className="flex items-center">
                    <h2>Want to participate?</h2>
                </header>
                <div className="mt-6">
                    <textarea 
                        name="body"
                        value={data.body ?? ""}
                        onChange={(e) => setData("body", e.target.value)}
                        className='w-full text-sm border-none focus:outline-none focus:ring' rows="5" placeholder='Quick, think of something to say!'
                        required
                        ></textarea>
                        {errors.body && (
                        <div className="text-red-500 text-xs mt-1">{errors.body}</div>
                    )}
                </div>
                <div className="flex justify-end border-t border-gray-200 pt-6 mt-6">
                    <button type='submit' disabled={processing}
                        className="bg-blue-500 font-semibold hover:bg-blue-600 px-10 py-2 rounded-md text-white text-xs uppercase"
                        >
                            {processing ? "Posting..." : "Post"}
                        </button>
                </div>
            </form>
            {comments.map((comment) => (
                <article 
                    key={comment.id}
                    className="flex bg-gray-100 p-6 border border-gray-200 rounded-xl space-x-4">
                    <div className="flex-shrink-0">
                        <img src={`https://i.pravatar.cc/100?u=${comment.user_id}`} width={60} height={60} className="rounded-xl" alt="" />
                    </div>
                    <div>
                        <header>
                            <h3 className="font-bold">{comment.author.name}</h3>
                        </header>
                        <p>
                            {comment.body}
                        </p>
                    </div>
                </article>
            ))}
        </>
    );
}