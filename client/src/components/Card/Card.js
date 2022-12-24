import React, { useState } from 'react'
import "../../css/Card/Card.css"
import Checkout from '../Checkout/Checkout';

export default function Crad(props) {
  const [showform,setShowform]=useState(false);
 
  return (
    <div className="card-wrapper">
      <div className="card-title">{props.cartItems.length ===0?'Card is Empty':"number of products in card is:"+props.cartItems.length}</div>
      <div className="card-items">
  {props.cartItems.map(item=>(
    <div className="card-item" key={item.id}>
      <img src={item.imageUrl}/>
     <div className="card-info">
      <div>
        <p>{item.title}</p>
        <p>qty:{item.qty}</p>
        <p>{item.price}</p>
      </div>
      <button onClick={()=>props.RemoveFromCard(item)}>
        Romve
      </button>
     </div>
      </div>



  ))}    
      </div>
      {props.cartItems.length!=0 &&
      <div className="card-footer">
<div className="total">Total:${props.cartItems.reduce((acc, item)=>{
  return (parseInt(acc) + parseInt(item.price))
},0)}</div>
<button onClick={()=>setShowform(true)}>select product</button>
      </div>
      }
{showform &&
    <Checkout setShowform={setShowform}/>
      }
    </div>
  )
}
