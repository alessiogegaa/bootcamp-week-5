import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductDetails from "./Components/ProductsDetails/ProductDetails";
import CartSummary from "./Components/CartSummary/CartSummary";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import { CartProvider } from "./Components/CartContext/CartContext";

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/productDetails/:id", 
    element: <ProductDetails products={sampleProducts}/>,
  },
  {
    path: "/cart",
    element: <CartSummary cartItems={sampleProducts} />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
    <Nav/>
    <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
