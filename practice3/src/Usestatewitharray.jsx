import React from 'react'
import { useState } from 'react'

const Usestatewitharray = () => {
    const [items,setItems]=useState([])
    function addItems(){
        setItems([...items, {
            id: items.length,
            value: "pen"
        }])
    }
  return (
    <>
    <div>Usestatewitharray</div>
    <div className="array">
        <ol>
         {items.map((item) =>(
          <li key={item.id}>{item.value}</li>
         ))}
        </ol>
        <button onClick={addItems}>Add Item</button>
    </div>
    </>
  )
}

export default Usestatewitharray