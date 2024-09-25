import React from 'react'
import { useState ,useEffect} from 'react';

const UseState = () => {
  var x=0
  const [update,setUpdate]=useState(x);
  const [data,setData]=useState("Ram")
  useEffect( ()=>{
    console.log("component mounted")
    
  },[data])
  function updatevalue(){
    setUpdate(prev=>prev+10);
  }
  function newValue(){
     setData("Seeta")
  }
  return (
      <>
     <h3>This is {data}</h3>
     <h1>Learing hooks {update}</h1>
     <button onClick={updatevalue}>change</button>
     <button onClick={newValue}>click</button>
     </>
  )
}

export default UseState