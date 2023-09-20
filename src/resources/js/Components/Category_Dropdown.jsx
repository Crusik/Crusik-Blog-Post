import Dropdown from '@/Components/Dropdown';
import { usePage } from '@inertiajs/react';

export default function Category_Dropdown({ categories }) {
    const { ziggy } = usePage().props;
    return (
        <Dropdown>
            <Dropdown.Trigger>
                <span className="inline-flex rounded-md w-full">
                    <button
                        type="button"
                        className="lg:inline-flex flex w-full lg:w-40 px-3 py-2 justify-between border border-transparent text-sm text-left font-medium rounded-md text-black dark:text-gray-400 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                    >
                        Categories

                        <svg
                            className="ml-2 -mr-0.5 h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </span>
            </Dropdown.Trigger>
            <Dropdown.Content>
                <Dropdown.Link href={"/"}>
                    All
                </Dropdown.Link>
                {categories.map((category, index) => (
                    <Dropdown.Link
                        key={index}
                        href={`/categories/${category.slug}`}
                        className={`${ziggy.uri === `/categories/${category.slug}` ? 'bg-green-200' : ''}`}
                    >
                        {category.name}
                    </Dropdown.Link>
                ))}
            </Dropdown.Content>
        </Dropdown>
    )
}