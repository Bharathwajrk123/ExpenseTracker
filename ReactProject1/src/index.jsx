import React from 'react'
import './styless.css'

function Index(Props) {
  return (
    <>
    <div class="btn">
        <p>Hi</p>
        <p>Hello</p>
        <h1>{Props.name}</h1>
    </div>
    
    </>
    
  )
}

export default Index;