import Footer from "./components/Footer/Footer";
import Header from "./components/Headers/Header";
// import { words } from "./words";
import data from './data.json';
import { useState } from "react";
import Products from "./components/Products/Proudcts";
function App() {
  const [products,setProducts]=useState(data);
  console.log(products);
  return (
     
      <div className="layout">
    <Header/>
      <main>
        <div className="wrapper">
          <Products products={products}/>
          <div className="filter-wrapper">Filters</div>
        </div>
      </main>
   <Footer name="test"/>
      </div>
  );
}

export default App;
