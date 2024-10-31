import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Nav from "./Components/Nav/Nav";
import { CartProvider } from "./Components/CartContext/CartContext";
import Routes from "./Components/Route/Routes";
import { ThemeProvider } from "./Components/ThemeContext/ThemeContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
    <CartProvider>
    <Nav/>
    <Routes/>
    </CartProvider>
    </ThemeProvider>
  </React.StrictMode>
);
