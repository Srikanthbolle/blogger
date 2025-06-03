// app/blogs/[id]/page.tsx
import React from "react";
import { blog_data } from "../../../../public/assets/assets";
import BlogDetail from "../../../../Components/BlogDetails";
import Footer from "../../../../Components/Footer";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: { id: string };
}

const BlogPage = ({ params }: Props) => {
  const blogId = Number(params.id);
  const blog = blog_data.find((item) => item.id === blogId);

  if (!blog) return <div className="text-center py-20">Blog not found.</div>;

  return (
    <>
      {/* Header Section */}
      <div className="flex justify-between px-8 py-5">
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
        <div className="flex items-center gap-2 border px-3 py-3 shadow-[-7px_7px_0px_#000000] cursor-pointer">
          <h2>Get Started</h2>
          <Image
            src="/assets/arrow.png"
            alt="arrow_image"
            width={20}
            height={20}
          />
        </div>
      </div>

      {/* Main Blog Detail */}
      <main className="max-w-4xl mx-auto px-4 py-10">
        <BlogDetail  />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default BlogPage;
