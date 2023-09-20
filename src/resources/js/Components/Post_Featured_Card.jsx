import CategoryButton from "./CategoryButton";

export default function Post_Featured_Card({post_data}) {
    return (
        <article
                className="transition-colors duration-300 hover:bg-gray-100 border border-black border-opacity-0 hover:border-opacity-5 rounded-xl">
                <div className="py-6 px-5 lg:flex">
                    <div className="flex-1 lg:mr-8">
                        <img src={`http://localhost:5173/storage/app/public/thumbnails/${post_data.thumbnail}`} alt="Blog Post illustration" className="rounded-xl"/>
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                        <header className="mt-8 lg:mt-0">
                            <div className="space-x-2">
                                <CategoryButton category={post_data.category}/>
                            </div>

                            <div className="mt-4">
                                <h1 className="text-3xl">
                                    <a href={`/posts/${post_data.slug}`}>
                                        {post_data.title}
                                    </a>
                                </h1>
                            </div>
                        </header>

                        <div className="text-sm mt-2">
                            <p>
                                {post_data.excerpt}
                            </p>
                        </div>
                    </div>
                </div>
            </article>
    )
}