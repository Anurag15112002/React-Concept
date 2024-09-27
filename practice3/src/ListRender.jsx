import React from 'react'

const ListRender = () => {
    const ipl=["csk","rcb","mi","mi"];
    const res=ipl.map((item,index)=><p key={index}>{item}  {index}</p>)
  return (
    <>
    <div>ListRender</div>
    <div className="listrender">
        <h1>{res}</h1>
        
    </div>
    </>
  ) 
}

export default ListRender