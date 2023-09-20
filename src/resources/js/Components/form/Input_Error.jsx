import { useForm } from "@inertiajs/react";

export default function Input_Error({name}) {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        slug: "",
        excerpt: "",
        body: "",
        category_id: "",
        thumbnail: null,
    });
    return (
        <>
            {errors[name] && (
                <div className="text-red-500 text-xs mt-1">{errors[name]}</div>
                )}
        </>
    )
}