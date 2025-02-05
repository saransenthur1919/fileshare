import React, { useState } from 'react'

function UploadForm() {
    const [file,setFile]=useState();

    const onFileSelect=(file)=>{
        if(file&&file.size>2000000){
            return;
        }
        setFile(file)
    }

  return (
    <div className='text-center'>
        
        <div className="flex items-center justify-center w-full">
        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-imp2color border-dashed rounded-lg cursor-pointer bg-but3color hover:bg-impcolor ">
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-12 h-12 mb-4 text-imp2color  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-lg md:text-xl text-imp2color  "><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500  ">SVG, PNG, JPG or GIF (Max Size : 5mb)</p>
            </div>
            <input id="dropzone-file" type="file" 
            class="hidden" onChange={(event)=>onFileSelect(event.target.files[0])}/>
        </label>
        </div> 
        <button disabled={!file} className='p-2 bg-imp2color text-but3color w-[30%] rounded-full mt-5 disabled:bg-impcolor '>Upload</button>
    </div>
  )
}

export default UploadForm