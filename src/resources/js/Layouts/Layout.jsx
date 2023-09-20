import User_Dropdown from '@/Components/User_Dropdown';
import { usePage } from '@inertiajs/react';

export default function Layout({ children, userName, isAdmin}) {
    const { auth, success, error } = usePage().props;
    return (
        <div>
            <section className="px-8 py-8">
                <nav className="px-8 md:flex md:justify-between md:items-center text-lg">
                    <div>
                        <a href="/" className="font-bold uppercase">Home Page</a>
                    </div>
                    <div>
                        {success.message && (
                            <div className="text-blue-500">{success.message}</div>
                        )}
                        {error.message && (
                            <div className="text-red-500">{error.message}</div>
                        )}
                    </div>
                    {/* <div>
                        {error.message && (
                            <div className="text-red-500">{error.message}</div>
                        )}
                    </div> */}
                    <div>
                        {auth.user ? (
                            <>
                                <User_Dropdown userName={userName} isAdmin={isAdmin}/>
                            </>
                        ) : (
                            <>
                                <a href="/register" className="p-2">
                                    Register
                                </a>
                                <a href="/login" className="p-2">
                                    Login
                                </a>
                            </>
                        )}
                    </div>
                </nav>
                <div>
                    {children}
                </div>
            </section>
        </div>
    );
}