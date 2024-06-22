import React from "react";

const ProductDetail = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt={product.name} style={{ width: '200px', height: '200px' }} />
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetail;