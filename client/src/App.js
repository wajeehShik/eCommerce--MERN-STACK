import Footer from "./components/Footer/Footer";
import Header from "./components/Headers/Header";
// import { words } from "./words";
import data from './data.json';
import { useState } from "react";
import Products from "./components/Products/Proudcts";
import Filter from "./components/Filter/Filter";
function App() {
  const [products,setProducts]=useState(data);
  const [sort,setSort]=useState("");
  const [size,setSize]=useState("")


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

  console.log(products);
  return (
     
      <div className="layout">
    <Header/>
      <main>
        <div className="wrapper">
          <Products products={products}/>
          <Filter handleFilterBySize={handleFilterBySize} handleFilterByOrder={handleFilterByOrder}/>
        </div>
      </main>
   <Footer name="test"/>
      </div>
  );
}

export default App;
