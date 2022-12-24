import React, { useState } from 'react'
import '../../css/Products/Products.css'
import ProductModal from './ProductModal';
export default function Products(props) {
const [product,setProduct]=useState("");


const openModal=(product)=>{
  console.log(product)
setProduct(product);
}

const closeModal=()=>{
  setProduct(false);
}

  return (

    <div className="products-wrapper">{props.products.map(product =>(
       <div className="products-item" key={product.id}>
            <a href="#" onClick={()=>openModal(product)}>
            <img src={product.imageUrl}  />
            </a>
<div className="product-desc">
    <p>{product.title}</p>
    <span>{product.price}</span>
</div>
<button onClick={()=>props.AddToCard(product)}>Add To card</button>
       </div>
    ))}
    

    <ProductModal product={product} 
closeModal={closeModal}/>
    </div>
  )
}
