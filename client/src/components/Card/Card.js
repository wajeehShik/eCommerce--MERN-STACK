import React from 'react'
import "../../css/Card/Card.css"

export default function Crad(props) {
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
    </div>
  )
}
