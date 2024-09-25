import React, { useCallback, useState } from 'react'

const From1 = () => {
    const[name,setName]=useState("");
    const[paswd,setPaswd]=useState("");
    function handlechange(e){
        if(e.target.name=='firstname'){
            const some=(e.target.value).toUpperCase();
            setName(some);
        }
        else
        {
            const some=(e.target.value).toUpperCase();
            setPaswd(some);
        }
    }
  return (
    <div>
        <form className='Form1'>
          <label >FirstName</label>
          <input type="text" name='firstname' value={name} onChange={handlechange}/><br />
          <label >Password</label>
          <input type="text" name='passwors' value={paswd} onChange={handlechange}/><br />

        </form>
    </div>
  )
}

export default From1