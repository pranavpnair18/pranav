import React from 'react'
import white from '../images/white.jpg'
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Contact = () => {
  return (
    <>
   
    <div className='mainc'> 

<img src={white} className='contimg' alt="me" />
 

 <div className='mainicon'>
  
 <a href="https://github.com/pranavpnair18"><FaGithub className='icons' /></a>
 <a href="https://x.com/home">< FaXTwitter className='icons'/></a>
<a href="https://in.linkedin.com/"> <FaLinkedinIn className='icons'/></a>
 <a href="pranavpnair18@gmail.com"><SiGmail className='icons'/></a>

 </div>
  </div>
    </>
  )
}

export default Contact