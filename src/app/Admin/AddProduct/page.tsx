"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const [image, setImage] = useState<File | null>(null);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Alex Bennett",
    authorImg: "/profile_1.png",
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!image) {
      toast.error("Please upload an image");
      return;
    }

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);
    formData.append("image", image);

    try {
      const response = await axios.post("/api/blog", formData);
      if (response.data.success) {
        toast.success(response.data.msg);
        setImage(null)
        setData({
    title: "",
    description: "",
    category: "Startup",
    author: "Alex Bennett",
    authorImg: "/profile_1.png",
  })
      } else {
        toast.error("Error");
      }
    } catch (err) {
      toast.error("Server error");
      console.error(err);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="px-8 pt-10">
      <p className="mb-2">Upload Thumbnail</p>
      <label htmlFor="image">
        <Image
          src={image ? URL.createObjectURL(image) : "/assets/upload.jpg"}
          alt="upload_image"
          width={140}
          height={80}
          className="border border-dashed border-gray-300 rounded-sm object-cover cursor-pointer"
        />
      </label>
      <input
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
          }
        }}
        type="file"
        id="image"
        hidden
        accept="image/*"
      />

      <p className="mt-8 mb-2 text-xl">Blog Title</p>
      <input
        name="title"
        value={data.title}
        onChange={onChangeHandler}
        type="text"
        placeholder="Type here"
        required
        className="px-3 py-2 w-full max-w-[500px] border rounded-md"
      />

      <p className="mt-8 mb-2 text-xl">Blog Description</p>
      <textarea
        name="description"
        value={data.description}
        onChange={onChangeHandler}
        rows={6}
        placeholder="Write content here"
        required
        className="px-3 py-2 w-full max-w-[500px] border rounded-md"
      />

      <p className="mt-8 mb-2 text-xl">Blog Category</p>
      <select
        name="category"
        value={data.category}
        onChange={onChangeHandler}
        className="w-40 mt-4 px-4 py-3 border text-gray-500 rounded-md"
      >
        <option value="Startup">Startup</option>
        <option value="Technology">Technology</option>
        <option value="Lifestyle">Lifestyle</option>
      </select>
<br />
      <button
        type="submit"
        className="mt-8 w-40 h-12 bg-black text-white rounded-md"
      >
        Add
      </button>
    </form>
  );
};

export default Page;
