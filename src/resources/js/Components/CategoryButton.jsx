export default function CategoryButton({category}) {
    return (
        <a href={`/categories/${category.slug}`}
            className="px-3 py-1 border border-red-300 rounded-full text-red-300 text-xs uppercase font-semibold"
            style={{fontSize: "10px"}}>{category.name}
        </a>
    )
}