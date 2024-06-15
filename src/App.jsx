import React, { useState } from "react";
import ProductList from "./components/ProductList.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import RelatedProducts from "./components/RelatedProducts.jsx";
import Cart from "./components/Cart.jsx";
import './App.css'

const products = [];

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState(null);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    fetchRelatedProducts(product.id);
  };

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const fetchRelatedProducts = (productId) => {
    const related = products.filter(p => p.id !== productId);
    setRelatedProducts(related);
  };

  return (
    <div className="app">
      <ProductList products={products} onSelectProduct={handleProductSelect} />
      {selectedProduct && (
        <ProductDetail product={selectedProduct} />
      )}
      {selectedProduct && (
        <button onClick={() => handleAddToCart({selectedProduct})}> Adicionar ao Carrinho</button>
      )}
      <RelatedProducts RelatedProducts={relatedProducts} />
      <Cart cartItems={cartItems} />
    </div >
  )
}

export default App;