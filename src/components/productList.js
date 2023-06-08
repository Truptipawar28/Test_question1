import React from 'react';
import './productList.module.css'

function ProductList({ products }) {
    return (
      <div className="product-list">
        <h2>Added Items</h2>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product.id} - {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ProductList;
