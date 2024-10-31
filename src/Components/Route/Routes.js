import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../../App";
import ProductDetails from "../ProductsDetails/ProductDetails";
import CartSummary from "../CartSummary/CartSummary";
import { useCart } from "../CartContext/CartContext";

const Routes = () => {
  const { products } = useCart();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/productDetails/:id",
      element: <ProductDetails products={products} />,
    },
    {
      path: "/cart",
      element: <CartSummary cartItems={products} />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
