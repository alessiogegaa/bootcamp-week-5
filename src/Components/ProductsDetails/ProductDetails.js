import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products.find(item => item.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  const { imageUrl, category, title, description, price } = product;

  return (
    <div className="mainContainer">
      <div className="leftContainer">
        <img src={imageUrl} alt={title}/>
      </div>
      <div className="rightContainer">
        <div className="product-description">
          <span>{category}</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="product-price">
          <span>{price}</span>
          <a href="#" className="cart-btn">
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
