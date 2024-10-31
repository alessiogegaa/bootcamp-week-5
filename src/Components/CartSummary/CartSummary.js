import React from 'react';
import './CartSummary.css';

const CartSummary = ({ cartItems }) => {
  
  const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

  const cartMap = {};
  storedCart.forEach(item => {
    cartMap[item.id] = item.quantity; 
  });

  const filteredCartItems = cartItems.filter(item => cartMap[item.id] > 0);

  return (
    <div className="cartSummaryContainer">
      <h2>Your Cart</h2>
      <div className="cartItemsContainer">
        {filteredCartItems.length > 0 ? (
          filteredCartItems.map((item) => {
            const quantity = cartMap[item.id] || 0; 
            return (
              <div className="cartItem" key={item.id}>
                <img src={item.imageUrl} alt={item.title} className="cartItemImage" />
                <div className="cartItemDetails">
                  <h3>{item.title}</h3>
                  <p>{item.price} $</p>
                  <div className="cartItemQuantity">
                    <label>Quantity:</label>
                    <input type="number" min="1" value={quantity} readOnly />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="emptyCartMessage">Your cart is empty</p>
        )}
      </div>
      <div className="cartSummaryFooter">
        <h3>Total: {filteredCartItems.reduce((total, item) => total + (item.price * (cartMap[item.id] || 0)), 0)} $</h3>
        <button className="checkoutButton">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartSummary;
