"use client"
// components/BlogDetail.tsx
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { blog_data } from "../public/assets/assets";

const BlogDetail = () => {
  const params = useParams();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const blogId = Number(params?.id);
    const blog = blog_data.find((item) => item.id === blogId);
    if (blog) setData(blog);
  }, [params]);

  if (!data) {
    return <div className="text-center py-20 text-gray-500">Loading blog...</div>;
  }

  return (
    <div className="px-4 max-w-4xl mx-auto">
      {/* Blog Image */}
      <Image
        src={data.image}
        alt={data.title}
        width={800}
        height={400}
        className="w-full h-auto rounded-md border border-black object-cover mb-6"
      />

      {/* Category + Title */}
      <p className="text-sm uppercase text-gray-600 font-medium mb-2">
        {data.category}
      </p>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {data.title}
      </h1>

      {/* Author Info */}
      <div className="flex items-center gap-3 mb-6">
        <Image
          src={data.author_img}
          alt={data.author}
          width={40}
          height={40}
          className="rounded-full border"
        />
        <div>
          <p className="text-gray-800 text-sm font-medium">{data.author}</p>
          <p className="text-gray-500 text-xs">
            {new Date(data.date).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <article className="text-gray-800 leading-7 space-y-6">
        <p>{data.description.repeat(3)}</p>
        <p>
          In today’s digital world, staying updated with technology is essential for businesses. From artificial intelligence to blockchain, the landscape is evolving fast. Startups that leverage these tools early often gain a competitive advantage.
        </p>
        <blockquote className="border-l-4 border-black pl-4 italic text-gray-700">
          “Innovation distinguishes between a leader and a follower.” – Steve Jobs
        </blockquote>
        <p>
          Besides tech, lifestyle choices also impact productivity and creativity. Maintaining a work-life balance, investing in health, and keeping up with global trends can shape not just personal success but also entrepreneurial growth.
        </p>
      </article>

      {/* Tags or CTA */}
      <div className="mt-10 border-t pt-6 flex flex-wrap items-center justify-between gap-4 text-sm text-gray-600">
        <span className="bg-black text-white px-3 py-1 rounded-sm">
          {data.category}
        </span>
        <div className="flex gap-2">
          <span className="cursor-pointer underline">Share</span>
          <span className="cursor-pointer underline">Comment</span>
          <span className="cursor-pointer underline">Back to Blog</span>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
