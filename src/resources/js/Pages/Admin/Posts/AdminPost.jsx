import Setting from "@/Components/Setting";
import Layout from "@/Layouts/Layout";
import { Inertia } from '@inertiajs/inertia';

export default function AdminPost({posts_data}) {
  const handleDelete = (postId) => {
    if (confirm('Are you sure you want to delete this post?')) {
      Inertia.delete(`/admin/posts/${postId}/delete`);
    }
  };
    return (
      <Layout>
        <Setting heading="Manage Posts">
          <div className="container mx-auto">
            <section className="mb-20 text-gray-800">
              <div className="block rounded-lg shadow-lg bg-white">
                <div className="flex flex-col">
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="min-w-full mb-0">
                          <thead className="border-b bg-gray-50 rounded-t-lg">
                            <tr>
                              <th scope="col" className="rounded-tl-lg text-sm py-4 font-medium">Title</th>
                              <th scope="col" className="rounded-tr-lg text-sm py-4 font-medium">Edit</th>
                              <th scope="col" className="rounded-tr-lg text-sm py-4 font-medium">Delete</th>
                            </tr>
                          </thead>
                          <tbody>
                          {posts_data.map((post) => (
          
                            <tr className="border-b" key={post.id}>
                              <td scope="row" className="text-sm py-4 text-center">
                                <div>
                                  <div>
                                    <a href={`/posts/${post.slug}`} className="mb-0.5 font-medium">{post.title}</a>
                                  </div>
                                </div>
                              </td>
                              <td className="text-sm py-4 text-center px-10">
                                <a href={`/admin/posts/${post.id}/edit`} className="font-medium text-blue-500 hover:text-blue-600 focus:text-blue-600 active:text-blue-700 transition duration-300 ease-in-out">Edit</a>
                              </td>
                              <td className="text-sm py-4 text-center px-10">
                                  <button 
                                    onClick={() => handleDelete(post.id)}
                                    className="font-medium text-red-500 hover:text-red-600 focus:text-red-600 active:text-red-700 transition duration-300 ease-in-out"
                                  >
                                    Delete
                                  </button>
                              </td>
                            </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Setting>
      </Layout>
    );
}