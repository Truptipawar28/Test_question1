import React, { useState } from 'react';
import ProductForm from './components/productForm';
import ProductList from './components/productList';
import TotalPrice from './components/totalPrice';
import Button from './components/Button';

function App() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    setTotalPrice(totalPrice + newProduct.price);
  };

  const handleClearProducts = () => {
    setProducts([]);
    setTotalPrice(0);
  };

  return (
    <div className="app">
      <h1>Add Products</h1>
      <ProductForm onAddProduct={handleAddProduct} />
      <ProductList products={products} />
      <TotalPrice totalPrice={totalPrice} />
      <Button onClick={handleClearProducts}>Clear Products</Button>
    </div>
  );
}

export default App;
