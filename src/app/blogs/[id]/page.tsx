'use client'
// app/blogs/[id]/page.tsx
import React, { use, useEffect, useState } from "react";
import { blog_data } from "../../../../public/assets/assets";
// import BlogDetail from "../../../../Components/BlogDetails";
import Footer from "../../../../Components/Footer";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import BlogDetail from "../../../../Components/BlogDetails";

interface BlogData {
  id: number;
  title: string;
  description: string;
  image: string;
  date: number;
  category: string;
  author: string;
  authorImg: string;
}

interface Props {
  params: { id: string };
}

const BlogPage = ({ params }: Props) => {
  const [data, setData] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const unwrappedParams = use(params);
  const blogId = unwrappedParams.id;
 

  const fetchBlogData = async () => {
    try {
      console.log("blog id n frontend is "+blogId)
      setLoading(true);
      const response = await axios.get("/api/blog", {
        params: {
          id: blogId
        }
      });
      setData(response.data);
    } catch (err) {
      setError("Failed to fetch blog data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (blogId) {
      fetchBlogData();
    }
  }, [blogId]);

  // Show loading state
  if (loading) return <div className="text-center py-20">Loading...</div>;
  
  // Show error state
  if (error) return <div className="text-center py-20">{error}</div>;
  
  // Show not found if neither static nor fetched data exists
  if (!data) return <div className="text-center py-20">Blog not found.</div>;

  return (
    <>
      {/* Header Section */}
     <div className="fixed top-0 left-0 w-full z-50 bg-[#b0c4de] shadow-md">
  <div className="flex justify-between px-8 py-2">
    <div>
      <Link href="/">
        <Image
          src="/assets/blogger.jpg"
          width={150}
          height={50}
          alt="blogger_image"
        />
      </Link>
    </div>
    <div className="flex items-center gap-2 border px-3 py-3 rounded-md cursor-pointer">
      <h2>Get Started</h2>
      <Image
        src="/assets/arrow.png"
        alt="arrow_image"
        width={20}
        height={20}
      />
    </div>
  </div>
</div>



      {/* Main Blog Detail */}
      <main className="max-w-4xl mx-auto px-4">
        <BlogDetail blog={data} />
      </main>

      {/* Footer */}
      {/* <div className="fixed bottom-0 left-0 w-full z-50 bg-[#f8f8f8] shadow-t  py-4"> */}
  <Footer/>
{/* </div> */}
    </>
  );
};

export default BlogPage;