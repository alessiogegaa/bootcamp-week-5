import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';
import { useCart } from '../CartContext/CartContext';

const ProductCard = ({ id, title, price, imageUrl }) => {
  const navigate = useNavigate();
  const { quantities, increaseQuantity, decreaseQuantity, addToCart } = useCart();

  const handleDetailsClick = () => {
    navigate(`/productDetails/${id}`);
  };

  return (
    <div className='product-card'>
      <div className='product-image' onClick={handleDetailsClick}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className='product-info'>
        <h2 className='product-title'>{title}</h2>
        <p className='product-price'>{price}</p>
        <div className='quantity-controls'>
          <button onClick={() => decreaseQuantity(id)} className='quantity-btn'>-</button>
          <span>{quantities[id] || 1}</span> 
          <button onClick={() => increaseQuantity(id)} className='quantity-btn'>+</button>
        </div>
        <button 
          className='add-to-cart-btn' 
          onClick={() => addToCart(id)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
