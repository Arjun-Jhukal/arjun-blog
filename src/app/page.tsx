import { Suspense } from "react";
import SingleNewsBlock from "@/components/News";
import { performRequest } from "@/services/baseQuery";
import { getAllBlogs } from "@/services/getBlogs";
import { Blog } from "@/interface";
import LoadingNewsBlock from "@/components/NewsFallback";

export default function Home() {
  const QUERY: string = getAllBlogs();

  const BlogList = async () => {
    try {
      const data = (await performRequest({
        query: QUERY,
        variables: { slug: "/" },
      })) as {
        allPosts: Blog[];
      };

      const blogs = data?.allPosts || [];

      return <>{blogs.length > 0 && blogs.map((blog: any, index: number) => <SingleNewsBlock key={index.toString()} data={blog} />)}</>;
    } catch (e) {
      console.log(e);
      return <p>Error loading blogs.</p>;
    }
  };

  return (
    <section className="blog__list my-[80px] md:my-[120px]">
      <div className="container">
        <Suspense fallback={<LoadingNewsBlock />}>
          <BlogList />
        </Suspense>
      </div>
    </section>
  );
}
