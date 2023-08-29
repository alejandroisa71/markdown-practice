import { allBlogs } from ".contentlayer/generated";
//no funcionaba con './.contentlayer/generated
import { notFound } from "next/navigation";
import Mdx from '@/components/Mdx'

export const generateMetadata = async({params}) =>{
  const {title, description} = await getBlogData(`/${params.blogPath}`)

  return{
    title,
    description
  }
}

const getBlogData = async (path) => {
  const blog = allBlogs.find((blog) => blog.path === path);

  if (!blog) notFound();

  return blog;
};

const BlogPage = async({ params }) => {

  const blog = await getBlogData(`/${params.blogPath}`)
  // console.log(blog);

  return <Mdx code={blog.body.code}/>
};
export default BlogPage;
