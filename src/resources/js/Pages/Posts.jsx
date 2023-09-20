import Layout from '../Layouts/Layout.jsx';
import Posts_Grid from '../Components/Posts_Grid.jsx';
import Posts_Header from './Posts_Header.jsx';
import Footer from '../Components/Footer.jsx';

export default function Posts({ posts_data, categories, isAdmin }) {
    return (
        <Layout>
            <Posts_Header categories={categories} posts_data={posts_data} isAdmin={isAdmin}/>
            <main className="max-w-6xl mx-auto mt-6 lg:mt-20 space-y-6">
                <Posts_Grid posts_data={posts_data}/>
            </main>
            <Footer />
        </Layout>
    );
}