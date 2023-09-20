import { useEffect } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/react';
import Form_Input from '@/Components/form/Form_Input';
import Layout from '@/Layouts/Layout';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <Layout>
            <h1 className="text-center text-lg">Register</h1>
            <form onSubmit={submit} className="bg-gray-100 rounded-xl p-5 sm:maw-w-xs mt-7 max-w-sm mx-auto">
            <Form_Input name="name" label="Name" data={data} setData={setData}/>
            <Form_Input name="username" label="Username" data={data} setData={setData}/>
            <Form_Input name="email" label="Name" data={data} setData={setData}/>
            <Form_Input name="password" type='password' label="Password" data={data} setData={setData}/>
            <Form_Input name="password_confirmation" type='password' label="Confirm Password" data={data} setData={setData}/>
                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ml-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </Layout>
    );
}
