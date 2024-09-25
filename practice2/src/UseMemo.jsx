import React, { useState ,useMemo } from 'react'


const UseMemo = () => {
    const [add,setAdd]=useState(0);
    const [minus,setMinus]=useState(50);
    const calculation=useMemo(function multiply(){
      console.log("why are you running bro");
      return add*12;
  
    },[add]) // this function run only when add state change not run for minus state;
    
    return (
      <div className='App'>
        <h1>Learing usememo</h1>
        {calculation} <br />
        <button onClick={() =>setAdd(add+1)}>Addition</button>
        <span>{add}</span><br />
        <button onClick={() =>setMinus(minus-1)}>sub</button>
        <span>{minus}</span>
      </div>
  
  )
}

export default UseMemo