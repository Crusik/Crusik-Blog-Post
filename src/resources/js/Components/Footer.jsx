import { useForm, usePage } from "@inertiajs/react";

export default function Footer({post_data}) {
    const { error } = usePage().props;
    const { data, setData, post } = useForm({
        email: '',
    });

    const handleEmailSubmit = (event) => {
        event.preventDefault();
        post(`/newsletter`, data);
    };
    return (
        <footer className="bg-gray-100 border border-black border-opacity-5 rounded-xl text-center py-16 px-10 mt-16">
            <img src="/images/lary-newsletter-icon.svg" alt="" className="mx-auto -mb-6"/>
            <h5 className="text-3xl">Stay in touch with the latest posts</h5>
            <p className="text-sm">Promise to keep the inbox clean. No bugs.</p>
            <div>
                {error.message && (
                    <div className="text-red-500">{error.message}</div>
                )}
            </div>

            <div className="mt-10">
                <div className="relative inline-block mx-auto lg:bg-gray-200 rounded-full">
                    <form onSubmit={handleEmailSubmit} value={data.email} onChange={e => setData('email', e.target.value)}  className="lg:flex text-sm">
                        <div className="lg:py-3 lg:px-5 flex items-center">
                            <label htmlFor="email" className="hidden lg:inline-block">
                                <img src="/images/mailbox-icon.svg" alt="mailbox letter"/>
                            </label>

                            <input id="email" name="email" type="text" placeholder="Your email address"
                                className="lg:bg-transparent pl-4 focus-within:outline-none"/>
                        </div>

                        <button type="submit"
                            className="transition-colors duration-300 bg-blue-500 hover:bg-blue-600 mt-4 lg:mt-0 lg:ml-3 rounded-full text-xs font-semibold text-white uppercase py-3 px-8">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    )
}