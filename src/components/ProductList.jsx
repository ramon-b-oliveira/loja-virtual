import React from "react";
import Product from "./Product";

const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Produtos Disponiveis</h2>
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
