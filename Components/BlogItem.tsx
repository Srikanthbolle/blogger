import Image from "next/image";
import React from "react";
import { blog_data } from "../public/assets/assets";
import Link from "next/link";

interface BlogItemProps {
    id:number;
  title: string;
  image: string;
  category: string;
  description: string;
}

const BlogItem = ({ image, category, title, description,id }: BlogItemProps) => {

  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white mx-[20px] border border-black hover:shadow-[-7px_7px_0px_#000000]">
      <Link href={`blogs/${id}`}>
      <Image
        src={image}
        alt=""
        width={400}
        height={400}
        className="border-b border-black"
      />
      </Link>
      <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">
        {category}
      </p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 text-sm tracking-tight text-gray-700">
          {description}
        </p>
        <div className="inline-flex items-center py-2 font-semibold text-center">
          Read more
          <Image
            src="/assets/arrow.png"
            alt="arrow-image"
            width={12}
            height={12}
            className="ml-2 mt-1"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
