import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Carrinho</h2>
      {cartItems.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
          <h3>{item.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Cart;