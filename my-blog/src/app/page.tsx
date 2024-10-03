// src/app/page.tsx
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Post from '../components/Post'
import Footer from '../components/Footer'
import { posts } from '../data/posts'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Banner />
      <main className="p-4">
        {posts.map(post => (
          <Post key={post.id} title={post.title} content={post.content} />
        ))}
      </main>
      <Footer />
    </div>
  )
}
