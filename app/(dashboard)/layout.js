import React from 'react'
import SideNav from './_components/SideNav'
import TopHeader from './_components/TopHeader'

function layout({children}) {
  return (
    <div>
        <div className='md:flex hidden h-full md:w-64 flex-col fixed insert-y-0 z-50'>
            <SideNav/>
        </div>
        <div className='md:ml-64'>
            <TopHeader/>
            {children}
        </div>
        <div>
            
        </div>
        </div>
  )
}

export default layout