import CategoryButton from "./CategoryButton";

export default function Post_Card({post_data, customClass}) {
    return (
        <article 
            className={`transition-colors duration-300 hover:bg-gray-100 border border-black border-opacity-0 hover:border-opacity-5 rounded-xl ${customClass}`}>
            <div className="py-6 px-5">
                <div>
                    <img src={`http://localhost:5173/storage/app/public/thumbnails/${post_data.thumbnail}`} alt="Blog Post illustration" className="rounded-xl"/>
                </div>

                <div className="mt-8 flex flex-col justify-between">
                    <header>
                        <div className="space-x-2">
                            <CategoryButton category={post_data.category}/>
                        </div>

                        <div className="mt-4">
                            <h1 className="text-3xl">
                                <a href={`/posts/${post_data.slug}`}>
                                    {post_data.title}
                                </a>
                            </h1>

                            {/* <span className="mt-2 block text-gray-400 text-xs">
                                Published <time>1 day ago</time>
                            </span> */}
                        </div>
                    </header>

                    <div className="text-sm mt-4">
                        <p>
                            {post_data.excerpt}
                        </p>
                    </div>
                </div>
            </div>
        </article>
    )
}