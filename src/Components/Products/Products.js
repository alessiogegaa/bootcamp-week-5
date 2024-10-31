import React from 'react';
import './Products.css';
import ProductCard from '../ProductCard/ProductCard';

const Products = ({ products }) => {
    return (
    <div className='products-container'>
      <h1 className='products-title'>Our Products</h1>
      <div className='carousel-container'>
        <div className='carousel'>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              imageUrl={product.imageUrl}
              price={product.price}
              onAddToCart={() => console.log(`Added ${product.title} to cart`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
