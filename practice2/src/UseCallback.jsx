import React, { useCallback, useState } from 'react'
import ChildA from './ChildA'

const UseCallback = () => {
  const [add,setAdd]=useState(0);
  const [count,setCount]=useState(0);
  const learning = useCallback(()=>{
    //wowfoijewfiowhfo
  },[add]) 
  return (
    <div className="App">
      <h1>Learning Usecallback</h1>
      <ChildA learning={learning}/>
      <h2>{add}</h2>
      <button onClick={
        () =>setAdd(add+1)
      }>Add</button>
      <h2>{count}</h2>
      <button onClick={()=>setCount(count+1)}>count</button>
    </div>
  )
}

export default UseCallback