'use client'
import Image from "next/image";
import React from "react";

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  date: number;
  category: string;
  author: string;
  authorImg: string;
}

const BlogDetail = ({ blog }: { blog: Blog }) => {
  return (
    <div className="px-4 max-w-4xl mx-auto">
      {/* Blog Image */}
      
      <Image
        src={blog.image}
        alt={blog.title}
        width={200}
        height={50}
        className="w-full h-auto rounded-md border border-black object-cover mb-6"
      />

      {/* Category + Title */}
      <p className="text-sm uppercase text-gray-600 font-medium mb-2">
        {blog.category}
      </p>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {blog.title}
      </h1>

      {/* Author Info */}
      <div className="flex items-center gap-3 mb-6">
        <Image
          src={blog.authorImg}
          alt={blog.author}
          width={40}
          height={40}
          className="rounded-full border"
        />
        <div>
          <p className="text-gray-800 text-sm font-medium">{blog.author}</p>
          <p className="text-gray-500 text-xs">
            {new Date(blog.date).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <article className="text-gray-800 leading-7 space-y-6">
        <p>{blog.description}</p>
      </article>

      {/* Tags or CTA */}
      <div className="mt-10 border-t pt-6 flex flex-wrap items-center justify-between gap-4 text-sm text-gray-600">
        <span className="bg-black text-white px-3 py-1 rounded-sm">
          {blog.category}
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