import Footer from "./components/Footer/Footer";
import Header from "./components/Headers/Header";
// import { words } from "./words";
import data from './data.json';
import { useEffect, useState } from "react";
import Products from "./components/Products/Proudcts";
import Filter from "./components/Filter/Filter";
import Card from "./components/Card/Card";
function App() {
  const [products,setProducts]=useState(data);
  const [sort,setSort]=useState("");
  const [size,setSize]=useState("")
  const [cartItems,setCartItems]=useState(JSON.parse(localStorage.getItem("cardItems"))||[]);


 const handleFilterBySize=(e)=>{
  setSize(e.target.value)
console.log(e.target.value);
if(e.target.value=='ALL'){
setProducts(data);
}else{
  let productsClone=[...products];
  let newProducts=productsClone.filter(p=>p.sizes.indexOf(e.target.value) !=-1);
  setProducts(newProducts);
 }
}
 const handleFilterByOrder=(e)=>{
let order=e.target.value;
  


let productsClone=[...products];
let newProducts=productsClone.sort(function(a,b){
if(order=='lowst'){
 return a.price - b.price
}else if(order=='heights'){
  return b.price - a.price
}else{
  return a.id<b.id?1:-1
}

});
setProducts(newProducts)

 }


 const AddToCard=(product)=>{
  const cardItemsClone=[...cartItems];
var isProductExists=false;
  cardItemsClone.forEach(p=>{
    if(p.id==product.id){
      p.qty++;
      isProductExists=true;
    }
  })
if(!isProductExists){
  cardItemsClone.push({...product,qty:1});
}
setCartItems(cardItemsClone)

 }


useEffect(()=>{
localStorage.setItem('cardItems', JSON.stringify(cartItems))
},[cartItems]);


 const RemoveFromCard=(product)=>{ 
   const cardItemsClone=[...cartItems];
setCartItems(cardItemsClone.filter(p=>p.id!=product.id))
 }
  return (
     
      <div className="layout">
    <Header/>
      <main>
        <div className="wrapper">
          <Products products={products} AddToCard={AddToCard}/>
          <Filter productsNumber={products.length} handleFilterBySize={handleFilterBySize} handleFilterByOrder={handleFilterByOrder}/>
        </div>
   <Card cartItems={cartItems} RemoveFromCard={RemoveFromCard}/>
      </main>
   <Footer name="test"/>
      </div>
  );
}

export default App;
