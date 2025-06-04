"use client";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
  const [image, setImage] = useState();
  const [data,setData] = useState({
    title:"",
    description:"",
    category:"Startup",
    author:"Alex Bennett",
    autorImg:"",

  })
  return (
    <>
      <form action="" className="px-8 pt-10">
        <p className="mb-2">Upload Thumbnail</p>
        <label htmlFor="image">
          <Image
            src={!image ? "/assets/upload.jpg" : URL.createObjectURL(image)}
            width={140}
            height={20}
            alt="upload_image"
            className="border border-dashed border-gray-300"
          />
        </label>
        <input
          onChange={(e: any) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />
        <p className="mt-8 mb-2 text-xl">Blog Title</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="px-3 py-1 w-full max-w-[500px] border rounded-md"
        />

        <p className="mt-8 mb-2 text-xl">Blog Description</p>
        <textarea
          type="text"
          rows={6}
          placeholder="Write content"
          required
          className="px-3 py-1 w-full max-w-[500px] border rounded-md"
        />
        <p className="mt-8 mb-2 text-xl">Blog Category</p>
        <select
          name="category"
          className="w-40 mt-4 px-4 py-3 border text-gray-500"
        >
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <br />
        <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">
          Add
        </button>
      </form>
    </>
  );
};

export default page;
