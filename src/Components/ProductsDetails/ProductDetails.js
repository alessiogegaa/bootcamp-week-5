import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useCart } from "../CartContext/CartContext";

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) return <p>Product not found</p>;

  const { imageUrl, category, title, description, price } = product;

  return (
    <div className="mainContainer">
      <div className="leftContainer">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="rightContainer">
        <div className="product-description">
          <span>{category}</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="product-price">
          <span>{price}</span>
          <button className="cart-btn" onClick={() => addToCart(product.id)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
