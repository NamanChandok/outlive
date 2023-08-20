import Header from "@/components/Header"
import Outro from "@/components/Outro"
import Footer from "@/components/Footer"
import SubpageHero from "@/components/SubpageHero"
import { Cabin } from 'next/font/google'
import Post from "@/components/Post"
import fs from 'fs';
import matter from "gray-matter"
import { PostMetadata } from "@/components/PostMetadata"


const getPostMetadata = (): PostMetadata[] => {
  const folder = 'posts/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const posts = markdownPosts.map((filename) => {
    const fileContent = fs.readFileSync(`posts/${filename}`, 'utf8')
    const matterResult = matter(fileContent);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      imgUrl: matterResult.data.imgUrl,
      author: matterResult.data.author,
      slug: filename.replace('.md', ''),
    };
  })
  return posts;
}

const cabin = Cabin({subsets: ['latin'], weight: 'variable'})

export default function Home() {

  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post, i) => (
      <Post key={i} {...post} />
  ))

  return (
    <main>
      
        <Header />

        <SubpageHero page="Blog"/>

        <div className={cabin.className + ' w-screen text-dark bg-cream px-8 py-12 md:py-24 flex flex-col items-center text-center md:px-48'}>
            <h1 className='font-primary text-dark text-5xl md:text-6xl'>Blog</h1>
            <hr className="w-16 border-outlive-blue border-2 mt-4 mb-6 mx-auto" />
            {postPreviews}
        </div>

        <Outro />

        <Footer />
    </main>
  )
}
