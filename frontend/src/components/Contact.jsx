import React from 'react'
import Navbar from './navbar'
function Contact() {
  return (
    <>
      <div className='m-25'>
        <div className="">
          <label className="input input-bordered flex  items-center justify-contet  gap-2 w-[600px]">
            Name
            <input type="text" className="grow" placeholder="Daisy" />
          </label>
        </div>
      </div>
    </>
  );
}

export default Contact
