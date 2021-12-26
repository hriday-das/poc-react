

import React, { useState } from 'react'
function Reg() {
  const [number, setnumber] = useState("")
  const [mail, setmail] = useState("")
  const [password, setpassword] = useState("")
  async function signUp() {

    let item = { number, mail, password }


    let result = await fetch("http://localhost:3007/api/create", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      }
    })
    await result.json()
  }
  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>register page</h1>
      <input type="number" value={number} onChange={(e) => setnumber(e.target.value)}
        className='form-control' placeholder='number' />
      <br />
      <input type="text" value={mail} onChange={(e) => setmail(e.target.value)} className='form-control' placeholder='mail' />
      <br />
      <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className='form-control' placeholder='passwoed' />
      <br />
      <button onClick={signUp} className='btn btm-primary'>Sign UP</button>
    </div>
  )
}


export default Reg

