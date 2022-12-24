import React from 'react'
import "../../css/Filter/Filter.css"

export default function Filter(props) {
  return (
    <div className="filter-wrapper">
        
        <h2 className="filter-title">Filter</h2>
        <div className="number-of-products">Number of products 4</div>
        <div className="filter-by-size">
            <span>Filter</span>
            <select value={props.size} className="filter-select" onChange={props.handleFilterBySize}>
                <option value="ALL">all</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
            </select>
        </div>

        <div value={props.sort} className="filter-by-size" onChange={props.handleFilterByOrder}>
            <span>Order</span>
            <select className="filter-select">
                <option value="latest">Latest</option>
                <option value="lowst">Lowst</option>
                <option value="heights">heights</option>
            </select>
        </div>
    </div>

  )
}
