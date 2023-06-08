import React, { useState } from 'react';

import './productForm.module.css'

function ProductForm({ onAddProduct }) {
    const [productId, setProductId] = useState('');
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState();
  
    const handleProductIdChange = (event) => {
      setProductId(event.target.value);
    };
  
    const handleProductNameChange = (event) => {
      setProductName(event.target.value);
    };
  
    const handleProductPriceChange = (event) => {
      setProductPrice(Number(event.target.value));
    };
  
    const handleAddProduct = (event) => {
      event.preventDefault();
      const newProduct = {
        id: productId,
        name: productName,
        price: productPrice,
      };
      onAddProduct(newProduct);
      setProductId('');
      setProductName('');
      setProductPrice(0);
    };
  
    return (
      <form className="product-form" onSubmit={handleAddProduct}>
        <label htmlFor="productId">Product ID:</label>
        <input
          type="text"
          id="productId"
          value={productId}
          onChange={handleProductIdChange}
        />
  
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={handleProductNameChange}
        />
  
        <label htmlFor="productPrice">Selling Price:</label>
        <input
          type="number"
          id="productPrice"
          value={productPrice}
          onChange={handleProductPriceChange}
        />
  
        <button type="submit">Add Product</button>
      </form>
    );
  }
  
  export default ProductForm;