import { createContext, useContext, useState } from 'react';
import productsData from '../../assets/products.json'; 

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [quantities, setQuantities] = useState({});
  const [cartQuantity, setCartQuantity] = useState({});
  const [totalCartQuantity, setTotalCartQuantity] = useState(0);

  const increaseQuantity = (productID) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productID]: (prevQuantities[productID] || 1) + 1,
    }));
  };

  const decreaseQuantity = (productID) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productID]: prevQuantities[productID] > 1 ? prevQuantities[productID] - 1 : 1,
    }));
  };

  const addToCart = (productID) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find((item) => item.id === productID);
    const quantityToAdd = quantities[productID] || 1;

    if (existingProduct) {
      existingProduct.quantity += quantityToAdd;
    } else {
      cart.push({ id: productID, quantity: quantityToAdd });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    setCartQuantity((prevQuantities) => ({
      ...prevQuantities,
      [productID]: (prevQuantities[productID] || 0) + quantityToAdd,
    }));

    setTotalCartQuantity((prevQuantity) => prevQuantity + quantityToAdd);
  };

  const products = productsData.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    imageUrl: item.images[0], 
    price: `${item.price}$`,
  }));

  return (
    <CartContext.Provider value={{ quantities, increaseQuantity, decreaseQuantity, addToCart, totalCartQuantity, products }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
