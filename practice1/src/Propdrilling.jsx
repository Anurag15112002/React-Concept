import React from 'react'
import ChildA from './ChildA'
import { createContext } from 'react';

const data=createContext();
const Propdrilling = () => {
    const name= "Anurag";
  return (
    <>
     <data.Provider value={name}>
        <ChildA />
     </data.Provider>
   </>
  )
}

export default Propdrilling;
export {data};