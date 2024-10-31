import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaMoon } from "react-icons/fa";
import "./Nav.css";
import { useCart } from "../CartContext/CartContext";

const Nav = () => {
  const { totalCartQuantity } = useCart();
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartQuantity(
      storedCart.reduce((total, item) => total + item.quantity, 0)
    );
  }, [totalCartQuantity]);
  return (
    <div className="nav">
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
      </ul>
      <div className="nav-icons">
        <a href="/cart" className="icon-link">
          <FaShoppingCart className="icon" title="Cart" />
          {cartQuantity > 0 && (
            <span className="cart-badge">{cartQuantity}</span>
          )}
        </a>
        <button
          className="icon-link"
          onClick={() => console.log("Toggle dark mode")}
        >
          <FaMoon className="icon" title="Toggle Dark Mode" />
        </button>
      </div>
    </div>
  );
};

export default Nav;
