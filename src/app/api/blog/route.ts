import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import BlogModel from "../../../../lib/models/BlogModel";
import { connect } from "mongoose";
import { ConnectDB } from "../../../../lib/config/db";
const fs= require('fs')
const LoadDB = async () => {
  await ConnectDB();
};
LoadDB();

// api endpoint to get all blogs
export async function GET(request) {
  try {
    const searchParams = request.nextUrl.searchParams
    const id = searchParams.get('id')

    console.log("id is"+id)
    
    if (id) {
      const blog = await BlogModel.findById(id);
      if (!blog) {
        return NextResponse.json(
          { error: "Blog not found" },
          { status: 404 }
        );
      }
      return NextResponse.json(blog);
    } else {
      // This else block will never execute with [id] dynamic route
      // Consider separating this into a different endpoint if needed
      const blogs = await BlogModel.find({});
      return NextResponse.json({ blogs });
    }
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// api endpoint for uploading blogs
export async function POST(request) {
  const formData = await request.formData();
  const timestamp = Date.now();

  try {
    const image = formData.get("image");
    
    // Validate the image file
    if (!image || !(image instanceof Blob) || image.size === 0) {
      return NextResponse.json(
        { success: false, msg: "No valid image provided" },
        { status: 400 }
      );
    }

    // Generate safe filename
    const originalName = image.name.replace(/[^a-zA-Z0-9_.-]/g, "_");
    const fileName = `${timestamp}_${originalName}`;
    const path = `./public/uploads/${fileName}`;
    
    // Ensure the uploads directory exists
    try {
      await fs.promises.mkdir('./public/uploads', { recursive: true });
    } catch (err) {
      console.error("Error creating uploads directory:", err);
    }

    // Convert image to buffer and save
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    console.log("image buffer is "+buffer)
    await writeFile(path, buffer);
    
    const imgUrl = `/uploads/${fileName}`;
    
    const blogData = {
      title: formData.get("title")?.toString() || "",
      description: formData.get("description")?.toString() || "",
      category: formData.get("category")?.toString() || "",
      author: formData.get("author")?.toString() || "",
      image: imgUrl,
      authorImg: formData.get("authorImg")?.toString() || "",
    };

    await BlogModel.create(blogData);
    return NextResponse.json({ success: true, msg: "Blog Added", imgUrl });
    
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json(
      { success: false, msg: "Server error" },
      { status: 500 }
    );
  }
}

// creating api endpoint  to delete blog
export async function DELETE(request) {
    const id= await request.nextUrl.searchParams.get("id")
    const blog = await BlogModel.findById(id)
    fs.unlink(`./public${blog.image}`,()=>{});
    await BlogModel.findByIdAndDelete(id)
    return NextResponse.json({msg:"Blog Deleted"})
    
}