import React from 'react'
import facts  from './facts'
const Card = ()=>{
  return(
    <div className="main-card">

    {  facts.map((fact,index)=>{
        return(
          <>
          <h1>Fact No :{index} </h1>
          <div classname="semi-card">
          <h2>{fact}</h2>
          </div>
          </>
        )
    })   }
    
    </div>
  )
}

export default Card