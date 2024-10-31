import React from "react";
import Products from "./Components/Products/Products";
import { useCart } from "./Components/CartContext/CartContext";
const App = () => {
    const { products } = useCart();
  return (
    <>
      <div className='App'>
      {products ? (
        <Products products={products} />
      ) : (
        <p>Loading...</p>
      )}
      </div>
    </>
  );
};

export default App;
