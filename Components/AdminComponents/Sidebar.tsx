import React from "react";
import Image from "next/image";
import Link from "next/link";
const Sidebar = () => {
  return (
    <div className="max-w-56 border border-black h-[100vh]">
      <div className="w-full mb-[30px] border-b-gray-400 border-b-2">
        <Image
          src="/assets/blogger.jpg"
            width={230}
          height={50}
          alt="bloger_image"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Link href="/Admin/AddProduct">
      <div className="flex gap-2 items-center border border-black py-1 border-r-0 ml-10 px-2 rounded-sm">
         <Image
          src="/assets/add_icons.png"
            width={20}
          height={20}
          alt="add_image"
        />
        <span>Add Blogs</span>
      </div>
      </Link>
      <Link href="/Admin/BlogList">
       <div className="flex gap-2 items-center border border-black py-1 border-r-0 ml-10 px-2 rounded-sm">
         <Image
          src="/assets/blog_icon.png"
            width={20}
          height={20}
          alt="edit_image"
        />
        <span>Blog Lists</span>
      </div>
      </Link>
      <Link href="/Admin/Subscriptions">
       <div className="flex gap-2 items-center border border-black py-1 border-r-0 ml-10 px-2 rounded-sm">
         <Image
          src="/assets/email_icon.png"
            width={20}
          height={20}
          alt="email_image"
        />
        <span>Subscriptions</span>
      </div>
      </Link>
      </div>
    </div>
  );
};

export default Sidebar;
