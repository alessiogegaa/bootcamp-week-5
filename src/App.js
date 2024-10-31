import React from "react";
import Nav from "./Components/Nav/Nav";
import Products from "./Components/Products/Products";

const App = () => {
  const sampleProducts = [
    {
      id: 1,
      title: 'Product 1',
      description: 'A great product',
      imageUrl: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      price: '$29.99',
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'Another awesome product',
      imageUrl: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      price: '$39.99',
    },
    {
      id: 3,
      title: 'Product 2',
      description: 'Another awesome product',
      imageUrl: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      price: '$39.99',
    },{
      id: 4,
      title: 'Product 2',
      description: 'Another awesome product',
      imageUrl: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      price: '$39.99',
    },
    {
      id: 5,
      title: 'Product 2',
      description: 'Another awesome product',
      imageUrl: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      price: '$39.99',
    },
  ];
  return (
    <>
      <div className='App'>
        <Products products={sampleProducts} />
      </div>
    </>
  );
};

export default App;
