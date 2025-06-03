import React, { useState } from "react";
import { blog_data } from "../public/assets/assets";
import BlogItem from "./BlogItem";

interface blogListProps{
    categoryStyles:string[];
}

const BlogList = ({categoryStyles}:blogListProps) => {
    const [menu,setMenu] = useState("All");
   
   console.log('sty',categoryStyles)
  return (
    <div className="">
      <div className="flex justify-center gap-6 my-10">
        {
            categoryStyles?.map((styles,id)=>{
                return (
                   <button key={styles} onClick={()=>setMenu(styles)} className={`${menu===styles?"text-white bg-black px-4 py-1 rounded-sm":""}   `}>{styles}
                   </button>
                )
            })
        }
        {/* <button onClick={()=>setMenu("All")}  className={menu=== "All"? "text-white bg-black px-4 py-1 rounded-sm":""}>
          All
        </button>
        <button onClick={()=>setMenu("Lifestyle")} className={menu=== "Lifestyle"? "text-white bg-black px-4 py-1 rounded-sm":""}>Lifestyle</button>
        <button onClick={()=>setMenu("Startup")} className={menu=== "Startup"? "text-white bg-black px-4 py-1 rounded-sm":""}>Startup</button>
        <button onClick={()=>setMenu("Technology")} className={menu=== "Technology"? "text-white bg-black px-4 py-1 rounded-sm":""}>Technology</button>
       */}
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blog_data
          .filter((cat) => menu === "All" || cat.category === menu)
          .map((item, index)=>{
                return <BlogItem key={index} id={item.id} image={item.image} title={item.title} category={item.category} description={item.description}/>
            })
        }
      </div>
    </div>
  );
};

export default BlogList;
