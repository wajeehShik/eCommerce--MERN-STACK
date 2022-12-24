import React, { useState } from 'react'

export default function Checkout(props) {
    const [value,setValue]=useState('');

    const submitOrder=(e)=>{
      e.preventDefault();
      const order={
        name:value.name,
        email:value.email,
      }
      alert('order success')
    }
  
  
    const handleChange=(e)=>{
      setValue((prevState)=>({...prevState,[e.target.name]:e.target.value}));
    }
  return (
    <div className="checkout-form">
        <span onClick={()=>props.setShowform(false)} class="close-icon">&times;</span>
        <form onSubmit={submitOrder}>
          <div>
            <label>Name</label>
            <input type="text" required name="name"  onChange={handleChange}/>
          </div>
          
          <div>
            <label>Email</label>
            <input type="email" required name="email" onChange={handleChange}/>
          </div>

          <div>
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
  )
}
