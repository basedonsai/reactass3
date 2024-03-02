import React from 'react';


const Product = ({ product }) => (
  <div className="product">
    <img src={product.image} alt={product.title} />
    <h2>{product.title}</h2>
    <p>{product.category}</p>
    <p>${product.price}</p>
  </div>
);

export default Product;
