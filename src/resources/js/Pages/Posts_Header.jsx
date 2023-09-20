import Category_Dropdown from '@/Components/Category_Dropdown';

export default function Posts_Header({ categories, posts_data, isAdmin }) {
    return (
        <header className="max-w-xl mx-auto mt-20 text-center">
            <h1 className="text-4xl">
                Latest News
            </h1>
            <div className="space-y-2 lg:space-y-0 lg:space-x-4 mt-4">
                <div className="relative lg:inline-flex bg-gray-100 rounded-xl">
                    <Category_Dropdown categories={categories} posts_data={posts_data}/>
                </div>
                {/* <!-- Search --> */}
                <div className="relative lg:inline-flex items-center bg-gray-100">
                    <form method="GET" action="#">
                        <input type="text" name="search" placeholder="Find something"
                        className="bg-transparent placeholder-black font-semibold text-sm border-none w-full"/>
                    </form>
                </div>
                {/* ...Other Filters and Search */}
            </div>
        </header>
    );
}
