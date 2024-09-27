import React from 'react'
import { useState } from 'react';

const Usestatewithobject = () => {
    const [values,setValues]=useState({firstName:"Anurag" , lastName:"Rajput"});
    function update(){
         setValues({... values,firstName:"Abhay"})
    }
  return (
   <>
   <div className="object">
    <h1>my frist name is {values.firstName} and last name is {values.lastName}</h1>
    <button onClick={(update)}>update</button>
   </div>
   </>
  )
}

export default Usestatewithobject