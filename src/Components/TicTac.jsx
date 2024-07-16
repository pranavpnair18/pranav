import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

import Squaress from './Squaress';



const TicTac = () => {
    const [xisNext,setxisNext]= useState(true)
    const [sqr,setsqr]= useState(Array(9).fill(null))
    const handleClick=(i)=>{
        if (sqr[i] || calcwinner(sqr)){
            return
        }
        const newsqr=sqr.slice()
        if (xisNext){
        newsqr[i]="X"}
        else{
            newsqr[i]="O"}
        setsqr(newsqr)
        setxisNext(!xisNext)
    }
    const winner= calcwinner(sqr)

  return (
    <>
    <div>winner is:{winner}</div>
    <div className='square'>
   <Squaress value={sqr[0]} onSqrClik={()=>handleClick(0)} />
   <Squaress value={sqr[1]} onSqrClik={()=>handleClick(1)}/>
   <Squaress value={sqr[2]} onSqrClik={()=>handleClick(2)}/>
    </div>
    <div className='square'>
    <Squaress value={sqr[3]} onSqrClik={()=>handleClick(3)} />
    <Squaress value={sqr[4]} onSqrClik={()=>handleClick(4)}/>
    <Squaress value={sqr[5]} onSqrClik={()=>handleClick(5)}/>
     </div>
     <div className='square'>
     <Squaress value={sqr[6]} onSqrClik={()=>handleClick(6)}/>
     <Squaress value={sqr[7]} onSqrClik={()=>handleClick(7)} />
     <Squaress value={sqr[8]} onSqrClik={()=>handleClick(8)}/>
      </div>
      </>
  )
}

export default TicTac
const calcwinner=(sqr)=>{
    const lines=[
       [0,1,2],
       [3,4,5],
       [6,7,8],
       [0,3,6],
       [1,4,7],
       [2,5,8],
       [0,4,8],
       [2,4,6],

    ];
    for(let i=0;i<lines.length;i++){
        const [a,b,c]=lines[i]
        if(sqr[a]&&sqr[a]===sqr[b]&&sqr[a]===sqr[c]){
            return sqr[a]
        }


    }
    return null
}