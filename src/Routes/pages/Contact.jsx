import React from 'react'
import white from '../images/white.jpg'
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Contact = () => {
  return (
    <>
   
   <div className='flex flex-col items-center justify-center'>
        <img src={white} className='contimg' alt="me" />
        <div className='flex w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 items-center justify-around p-3'>
          <a href="https://github.com/pranavpnair18" className="m-2">
            <FaGithub className='text-4xl text-white' />
          </a>
          <a href="https://x.com/home" className="m-2">
            <FaXTwitter className='text-4xl text-white' />
          </a>
          <a href="https://in.linkedin.com/" className="m-2">
            <FaLinkedinIn className='text-4xl text-white' />
          </a>
          <a href="mailto:pranavpnair18@gmail.com" className="m-2">
            <SiGmail className='text-4xl text-white' />
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact