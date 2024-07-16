import React from 'react'

const Skills = () => {

const itemss = [

{
  name:"Full Stack Development",
  desc:"Full stack development involves building both the front-end and back-end of a web application, handling databases, servers, and interfaces.",

},

{
  name:"Custom Web Application Development",
  desc:"Custom web application development involves creating tailor-made web applications designed to meet specific business needs, offering unique functionalities and user experiences",
  
},
{
  name:"Maintanace And Support",
  desc:"Custom web application development involves creating tailor-made web applications designed to meet specific business needs, offering unique functionalities and user experiences",
  
},
{
  name:"Maintanace And Support",
  desc:"Maintenance and support in custom web application development ensure the application remains functional, secure, and up-to-date. This includes bug fixes, performance enhancements, security updates, and adding new features as needed. ",
  
},
{
  name:"Front End Development Services",
  desc:"Front-end development services focus on creating the visual and interactive aspects of a web application. This includes designing user interfaces, developing responsive layouts, and ensuring a seamless user experience across different devices and browsers.",
  
},
{
  name:"Back End Development Services",
  desc:"Backend development involves creating the server-side logic and database management that power a web application. This includes building APIs, managing databases, implementing security measures, and ensuring the application runs efficiently",
  
},

]

  return (
    <>
   {itemss.map((ite, index)=>{
    return(  <div className='promain' key={index}>
      <div className='pro w-3/4 md:w-1/3 lg:w-1/3 xl:w-1/3'>
       <h2 className='proname'><b>{ite.name}</b></h2>
       <h5 className='prolab'>{ite.desc}</h5>
      </div>
      </div>
      )
  



   })}
 

    
   
    </>
    
    
  )
}

export default Skills