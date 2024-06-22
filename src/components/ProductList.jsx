import React from "react";

const ProductList = ({ products, onSelectProduct }) => {
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px' }} />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <button onClick={() => onSelectProduct(product)}>Ver Detalhes</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;