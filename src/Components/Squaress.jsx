import React, { useState } from 'react'

const Squaress = ({value, onSqrClik}) => {
   
  
  return (
    <button  className='square' onClick={onSqrClik}>{value}</button>
  )
}

export default Squaress