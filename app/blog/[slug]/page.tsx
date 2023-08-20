import Header from "@/components/Header"
import Outro from "@/components/Outro"
import Footer from "@/components/Footer"
import BlogHero from "@/components/BlogHero"
import { Cabin } from 'next/font/google'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faCalendar } from "@fortawesome/free-solid-svg-icons"
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'
import fs from 'fs'
import { PostMetadata } from "@/components/PostMetadata"

const cabin = Cabin({subsets: ['latin'], weight: 'variable'})

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

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug
  }));
}

const getPostContent = (slug:string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);
  return matterResult;
}

export default function Home(props: any) {

  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <main>
      
        <Header />

        <BlogHero page={post.data.title}/>

        <div className={cabin.className + ' w-screen text-dark bg-cream px-8 py-12 md:py-24 flex flex-col md:px-48'}>
            <h4 className='tracking-wide uppercase text-[#a7a7a4] flex flex-row gap-3 py-3'>
                <FontAwesomeIcon icon={faUser} className="h-5"/> {post.data.author}
                <FontAwesomeIcon icon={faCalendar} className="h-5" /> {post.data.date}
            </h4>
            <h1 className='font-primary text-dark text-5xl md:text-6xl'>{post.data.title}</h1>
            <hr className="w-16 border-outlive-blue border-2 mt-4 mb-6" />
            <img src={post.data.imgUrl} alt={post.data.title} className="h-96 w-full object-cover"/>
            <div className="text-outlive-blue prose md:w-[65ch] mx-auto py-6" id="blog-post">
                <Markdown>
                  {post.content}
                </Markdown>
            </div>
        </div>

        <Outro />

        <Footer />
    </main>
  )
}
