import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around items-center py-2  bg-black'>
        <Image src="/assets/blogger.jpg" alt='footer_image' width={150} height={50} className=''/>
        <p className='text-sm text-white'>All right reserved. Copyright @blogger</p>
        <div className='flex gap-1'>
            <Image src="/assets/facebook.jpg" alt='facebook_image' width={20} height={20}/>
            <Image src="/assets/email.png" alt='email_image' width={20} height={20}/>
            <Image src="/assets/twitter.jpg" alt='twitter_image' width={20} height={20}/>
        </div>
    </div>
  )
}

export default Footer