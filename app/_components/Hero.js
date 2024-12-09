import React from 'react'
import constants from '../_utils/constants'

function Hero() {
  return (
    <section className="bg-but2color">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-5xl font-extrabold sm:text-5xl text-imp3color">
        <span className='text-imp2color'>Upload, Save</span> and
        <strong className="font-extrabold text-imp2color sm:block"> Share <span className='text-imp3color'>Files Easily</span></strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
        {constants.desc}
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-imp2color px-20 py-5 text-base font-medium text-white shadow hover:bg-imp3color hover:text-black focus:outline-none focus:ring active:bg-imp2color sm:w-auto"
          href="#"
        >
          Upload file
        </a>

        <a
          className="block w-full rounded px-12 py-5 text-sm font-medium text-imp2color shadow hover:text-imp3color focus:outline-none focus:ring active:text-imp2color sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero