import React from 'react'
import Image from 'next/image';

function Header() {
  return (
    <div>
        <header className="bg-imp2color">
  <div className="mx-auto flex h-16 max-w-screen-xl 
  items-center gap-8 px-4 sm:px-6 lg:px-8
  border-b">
    
    <a className="text-xl font-bold text-imp3color transition hover:text-impcolor" href="#"> SaranShare </a>

    <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">

          <li>
            <a className="text-white transition hover:text-imp3color text-base" href="#"> Home </a>
          </li>

          <li>
            <a className="text-white transition hover:text-imp3color text-base" href="#"> Upload </a>
          </li>

          <li>
            <a className="text-white transition hover:text-imp3color text-base" href="#"> About Us </a>
          </li>

          <li>
            <a className="text-white transition hover:text-imp3color text-base" href="#"> Contact </a>
          </li>

          
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="block rounded-md bg-imp3color px-5 py-2.5 text-sm font-medium text-white transition hover:bg-impcolor hover:text-black"
            href="/files"
          >
            Get Started
          </a>
        </div>

        <button
          className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:bg-impcolor hover:text-black md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>
    </div>
  )
}

export default Header