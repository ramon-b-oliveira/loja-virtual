import React from "react";
import Product from "./Product.jsx";

const RelatedProducts = ({ RelatedProducts }) => {
    return (
        <div className="related-products">
            <h3>Produtos Relacionados</h3>
            <div className="product-list">
                {RelatedProducts.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default RelatedProducts;