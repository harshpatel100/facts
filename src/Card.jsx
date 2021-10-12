import React from 'react'
import facts  from './facts'
const Card = ()=>{
  return(
    <div className="main-card">

    {  facts.map((fact,index)=>{
        return(
          <div className="card">
           <div className="card-image"></div>
          <div className="card-text">
          <h1>Fact No :{index} </h1>
          <h2>{fact}</h2>
          <div className="card-status">  </div>
          </div>
          </div>
        )
    })   }
    
    </div>
  )
}

export default Card