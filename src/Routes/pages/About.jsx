import React from 'react'
import Abo from '../images/about.jpg'

const About = () => {
  return (
    <div className='abmain'>
      
      
      <img src={Abo} className='newimg' alt="me" />

      <div className='ab'>
        <h2 className='m-4'><b>Name: </b>  PRANAV.P</h2>
        <h2 className='m-4'> <b>Degree:</b>  Btech Computer Science And Engineering(2021-2025)</h2>
        <h2 className='m-4'> <b>Collage:</b> Vidya Academy Of Science And Technology</h2>
        <h2 className='m-4'><b>Language:</b> Malayalam,English</h2>
        <h2 className='m-4'><b>Skills:</b> MernStack, Django, MySql, Javascript , GIT , Github</h2>
      </div>
    
    
    
    </div>
  )
}

export default About