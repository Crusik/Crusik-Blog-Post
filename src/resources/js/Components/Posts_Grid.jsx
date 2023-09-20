import Post_Card from "./Post_Card";
import Post_Featured_Card from "./Post_Featured_Card";
// import { InertiaLink } from '@inertiajs/inertia-react';

export default function Posts_Grid({ posts_data }) {
    return (
        <>
            {posts_data.length > 0 ? (
                <>
                    <Post_Featured_Card post_data={posts_data[0]} />
                    {posts_data.length > 1 && (
                    <div className="lg:grid lg:grid-cols-6">
                        {posts_data.slice(1).map((post, index) => (
                            <Post_Card key={index} post_data={post} customClass={index < 2 ? "col-span-3" : "col-span-2"}/>
                        ))}
                    </div>
                    )}
                </>
            ) : (
                <p className="text-center">No posts available.</p>
            )}
            {/* Render pagination links */}
        </>
    )
}