import { UserButton } from '@clerk/nextjs'
import { AlignJustify } from 'lucide-react'
import React from 'react'

function TopHeader() {
  return (
    <div className='flex p-5 border-b border-imp2color items-center
     justify-between md:justify-end'>
        <AlignJustify className='md:hidden'/>
        <a className="text-3xl font-bold text-imp2color transition hover:text-imp3color md:hidden" href="#"> SaranShare </a>
        <UserButton/>
    </div>
  )
}

export default TopHeader