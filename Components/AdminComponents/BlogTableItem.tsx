import Image from 'next/image'
import React from 'react'

const BlogTableItem = ({ authorImg, title, author, date, deleteBlog, mongoId }) => {
  console.log('title',title)
    const BlogDate = new Date(date)
    return (
        <tr className='bg-white border-b'>
            <th scope='row' className='flex items-center gap-3 px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                <Image
                    src={authorImg ? authorImg : "/public/assets/profile_1.png"} 
                    alt="Author"
                    width={40}
                    height={40}
                    className="rounded-full border"
                    priority={!authorImg}
                />
                <p>{author ? author : "no author"}</p>
            </th>
            <td className='px-6 py-4'>
                {title ? title : "no title"}
            </td>
            <td className='px-6 py-4'>
                {BlogDate.toDateString()}
            </td>
            <td 
                onClick={() => deleteBlog(mongoId)} 
                className='px-6 py-4 cursor-pointer text-[25px] text-red-400 hover:text-red-500'
            >
                ×
            </td>
        </tr>
    )
}

export default BlogTableItem