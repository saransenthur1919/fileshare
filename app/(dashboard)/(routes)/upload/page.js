"use client"
import React from 'react'
import UploadForm from './_components/UploadForm'

function Upload() {
  console.log("Upload component is rendering");
  return (
    <div className='p-5 px-8 md:px-28'>
      <h2 className='text-[20px] text-center m-5'>Upload Files and Share it</h2>
      <UploadForm />
    </div>
  );
}

export default Upload