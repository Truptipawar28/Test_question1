import React from 'react';
import './totalPrice.module.css'

function TotalPrice({ totalPrice }) {
    return <h2 className="total-price">Total Price: ${totalPrice}</h2>;
  }
  
  export default TotalPrice;
