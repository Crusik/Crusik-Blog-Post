import Footer from '../Components/Footer.jsx';
import CategoryButton from "@/Components/CategoryButton";
import Post_Comment from './Post_Comment.jsx';
import Layout from '@/Layouts/Layout.jsx';

export default function Post({ post_data, comments }) {
    return (
        <Layout>
            <main className="max-w-6xl mx-auto mt-10 lg:mt-20 space-y-6">
                <article className="max-w-4xl mx-auto lg:grid lg:grid-cols-12 gap-x-10">
                    <div className="col-span-4 lg:text-center lg:pt-14 mb-10">
                        <img src={`http://localhost:5173/storage/app/public/thumbnails/${post_data.thumbnail}`} alt="" className="rounded-xl"/>

                        {/* <p className="mt-4 block text-gray-400 text-xs">
                            Published <time>1 day ago</time>
                        </p> */}

                        <div className="flex items-center lg:justify-center text-sm mt-4">
                            <img src="/images/lary-avatar.svg" alt="Lary avatar"/>
                            <div className="ml-3 text-left">
                                <a href={`/author/${post_data.author.username}`}>
                                    {post_data.author.name}                                    
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-8">
                        <div className="hidden lg:flex justify-between mb-6">
                            <a href="/"
                                className="transition-colors duration-300 relative inline-flex items-center text-lg hover:text-blue-500">
                                <svg width="22" height="22" viewBox="0 0 22 22" className="mr-2">
                                    <g fill="none" fillRule="evenodd">
                                        <path stroke="#000" strokeOpacity=".012" strokeWidth=".5" d="M21 1v20.16H.84V1z">
                                        </path>
                                        <path className="fill-current"
                                            d="M13.854 7.224l-3.847 3.856 3.847 3.856-1.184 1.184-5.04-5.04 5.04-5.04z">
                                        </path>
                                    </g>
                                </svg>

                                Back to Posts
                            </a>

                            <div className="space-x-2">
                                <CategoryButton category={post_data.category}/>
                            </div>
                        </div>

                        <h1 className="font-bold text-3xl lg:text-4xl mb-10">
                            {post_data.title}
                        </h1>

                        <div className="space-y-4 lg:text-lg leading-loose">
                            {post_data.body}
                        </div>
                    </div>
                    <section className="col-span-8 col-start-5 mt-10 space-y-6">
                        <Post_Comment comments={comments} post_data={post_data}/>
                    </section>
                </article>
            </main>
            <Footer />
        </Layout>

    );
}