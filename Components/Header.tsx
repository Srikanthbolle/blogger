import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Header = () => {
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    const response = await axios.post("/api/email", formData);
    console.log('resp',response)
    if (response.data.success) {
      toast.success(response.data.msg);
      setEmail("");
    } else {
      toast.error("Error");
    }
  };

  return (
    <div>
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

      <div className="flex flex-col justify-center items-center text-center mx-auto pt-[80px]">
        <h1 className="text-[20px] font-semibold">Latest Blogs</h1>
        <p className="max-w-[750px]">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum has been the industry's standards dummy text
          ever.
        </p>
        <form
          onSubmit={onSubmitHandler}
          className="flex overflow-hidden border border-gray-300 "
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
