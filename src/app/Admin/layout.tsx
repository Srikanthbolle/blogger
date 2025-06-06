import React from "react";
import Sidebar from "../../../Components/AdminComponents/Sidebar";
import Image from "next/image";
  import { ToastContainer} from 'react-toastify';
export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <ToastContainer theme="dark"/>
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-4 px-5 border-b-gray-400 border-b-2">
            <h3>Admin Panel</h3>
            <Image
              src="/assets/profile_1.png"
              width={30}
              height={30}
              alt="profile_image"
            />
          </div>
           {children}
        </div>
       
      </div>
      
    </>
  );
}
