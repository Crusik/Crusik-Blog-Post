import Setting from "@/Components/Setting";
import Form_Input from "@/Components/form/Form_Input";
import Form_Label from "@/Components/form/Form_Label";
import Input_Error from "@/Components/form/Input_Error";
import TextArea from "@/Components/form/TextArea";
import Layout from "@/Layouts/Layout"
import { useForm } from '@inertiajs/react';
import { useState } from "react";

export default function Edit_Post({blog, categories, name}) {

    const { data, setData, post, processing } = useForm({
        _method: 'PUT',
        title: blog.title,
        slug: blog.slug,
        excerpt: blog.excerpt,
        body: blog.body,
        category_id: blog.category_id,
        thumbnail: blog.thumbnail,
    });

    const [selectedCategory, setSelectedCategory] = useState(blog.category_id);

    const handlePostEdit = (event) => {
        event.preventDefault();
        data.category_id = selectedCategory;
        post(route('admin.posts.update', 
            {id: blog.id}),
            {method: 'put', data: data});
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <Layout>
            <Setting heading={`Edit Post: ${blog.title}`}>
                <form onSubmit={handlePostEdit}
                encType="multipart/form-data"
                >
                    <Form_Input name="title" label="Title" data={data} setData={setData}/>
                    <Form_Input name="slug" label="Slug" data={data} setData={setData}/>
                    <Form_Input name="thumbnail" label="Thumbnail" type="file" onChange={(e) => setData('thumbnail', e.target.files[0])} data={data} setData={setData}/>                
                    <TextArea name="excerpt" label="Excerpt" data={data} setData={setData}/>
                    <TextArea name="body" label="Body" data={data} setData={setData}/>
                    <div className="mb-6 grid">
                        <Form_Label name="category_id" label="Category">Category</Form_Label>
                        <select
                            className="border border-gray-400 rounded-md" 
                            name="category_id"
                            id="category_id"
                            onChange={handleCategoryChange}
                            value={selectedCategory}
                            required
                        >
                        <option value="" disabled>Select a category</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        <Input_Error name={name}/>
                    </div>
                    <div className="flex justify-end border-t border-gray-400 pt-6 mt-6">
                    <button type='submit' disabled={processing}
                        className="bg-blue-500 font-semibold hover:bg-blue-600 px-10 py-2 rounded-md text-white text-xs uppercase"
                        >
                            {processing ? "Updating..." : "Update"}
                        </button>
                    </div>
                </form>
            </Setting>
        </Layout>
    );
}