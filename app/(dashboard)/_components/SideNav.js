"use client"
import { File, Files, Shield, Upload } from 'lucide-react'
import React, { useState } from 'react'

function SideNav() {
    const menuList = [{
        id:1,
        name:'Upload',
        icon:Upload,
        path:'/upload'
    },
    {
        id:2,
        name:'Files',
        icon:File,
        path:'/files'
    },
    {
        id:1,
        name:'Upgrade',
        icon:Shield,
        path:'/upgrade'
    }
]

    const[activeIndex,setActiveIndex] = useState(0);
  return (
    <div className='shadow-sm border-r border-imp2color h-full'>
        <div className='p-5'>
            <a className="text-3xl font-bold text-imp2color transition hover:text-imp3color" href="#"> SaranShare </a>
        </div>
        <div className='flex flex-col float-left w-full'>
            {menuList.map((item,index)=>(
            <button className={`flex gap-2 p-4 px-0 hover:bg-but3color
             hover:text-white w-full text-imp2color
              active:bg-imp3color
              ${activeIndex==index?'bg-imp2color text-white':null}`} onClick={()=>setActiveIndex(index)}>
                <item.icon/>
                <h2>{item.name}</h2>
            </button>
        ))}
        </div>
    </div>
  )
}

export default SideNav