import React from "react";

const ProductDetail = ({ product }) => {
    return (
        <div className="product-detail">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Preco: ${product.price}</p>
            <p>Descricao: {product.description}</p>
            <p>Tamanho: {product.size}</p>
        </div>
    )
}

export default ProductDetail