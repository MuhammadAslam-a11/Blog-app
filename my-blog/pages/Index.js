import Head from 'next/head';
import CommentSection from '../components/CommentSection';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Blog</title>
      </Head>
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="text-lg">Here’s my latest blog post...</p>
        <CommentSection />
      </main>
    </div>
  );
}
