import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between px-8 py-5">
        <div>
          <Image
            src="/assets/blogger.jpg"
            width={150}
            height={50}
            alt="bloger_image"
          />
        </div>
        <div className="flex items-center justify-center gap-1 border border-solid px-3 py-3  shadow-[-7px_7px_0px_#000000]">
          <h2>Get Started</h2>

          <Image
            src="/assets/arrow.png"
            alt="arrow_image"
            width={20}
            height={20}
            className="text-gray-400"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center mx-auto">
        <h1 className="text-[20px] font-semibold">Latest Blogs</h1>
        <p className="max-w-[750px]">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum has been the industry's standards dummy text
          ever.
        </p>
       <form className="flex overflow-hidden border border-gray-300 shadow-[-7px_7px_0px_#000000]">
  <input
    type="email"
    className="px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="Enter your email"
    required
  />
  <button
    type="submit"
    className="bg-gray-200 text-black active:text-white px-4 py-2 active:bg-gray-600 transition-colors"
  >
    Subscription
  </button>
</form>

      </div>
    </div>
  );
};

export default Header;
