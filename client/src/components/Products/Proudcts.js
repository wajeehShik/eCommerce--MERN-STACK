import React from 'react'
import '../../css/Products/Products.css'

export default function Products(props) {
  return (

    <div className="products-wrapper">{props.products.map(product =>(
       <div className="products-item" key={product.id}>
            <img src={product.imageUrl}  />
<div className="product-desc">
    <p>{product.title}</p>
    <span>{product.price}</span>
</div>
<button>Add To card</button>
       </div>
    ))}</div>
  )
}
