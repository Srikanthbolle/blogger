import React from 'react'
import Sidebar from '../../../Components/AdminComponents/Sidebar'

export default function Layout ({children}) {
  return (
    <>
    <div className='flex'>
    <Sidebar />
    </div>
    <div>{children}</div>
    </>
  )
}

