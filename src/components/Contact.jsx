import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col text-center items-center w-full bg-blue-500 justify-center'>
        <div className='py-10 pt-16'>
            <p className='text-white text-lg uppercase font-medium'>35,000+ already joined</p>
            <h2 className='text-white text-2xl font-bold mx-10 pt-4'>Stay up-to-date with what we’re doing</h2>
        </div>
        <div className='flex flex-col w-[80%] md:flex-row md:justify-center md:gap-4'>
            <div className='mb-4 '><input type="text" placeholder='Enter your email address' className='rounded-md p-3 w-full lg:pr-16'/></div>
            <div className='mb-4'><button type="button" class="w-full text-white hover:text-red-400 border border-red-700 bg-red-500 hover:bg-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 p-[13px] text-center mr-2 mb-10">Contact Us</button></div>
        </div>
    </div>
  )
}

export default Contact
