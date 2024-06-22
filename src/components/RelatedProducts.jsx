import React from "react";

const RelatedProducts = ({ relatedProducts }) => {
  if (!relatedProducts){
    return null;
  }

  return (
    <div>
      <h2>Produtos Relacionados</h2>
      {relatedProducts.map(product => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px' }} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default RelatedProducts;