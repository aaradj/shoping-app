import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
//Header
import Navbar from "./Header/Navbar";
//Context
import ProductsContextProvider from "./services/context/ProductsContextProvider";
import CartContextProvider from "./services/context/CartContextProvider";
//Components
import Store from "./components/Store";
import ProductDetails from "./components/shared/ProductDetails";
import ShopCart from "./components/shared/ShopCart";
import { getProducts } from "./services/api";
import SignUp from "./components/SignUp";
//Footer
import Footer from "./Footer/Footer";
import Login from "./components/Login";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      setData(await getProducts());
    };
    fetchApi();
  });
  return (
    <div>
      {data.length ? (
        <ProductsContextProvider>
          <CartContextProvider>
            <Route path="/product/:id" component={ProductDetails} />
            <Route path="/shop" component={ShopCart} />
            <Route path="/home" component={Navbar} />
            <Route path="/home" component={Store} />
            <Route path="/home" component={Footer} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Redirect to="/home" />
          </CartContextProvider>
        </ProductsContextProvider>
      ) : (
        <div className="loader">
          <img
            src="https://c.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif"
            alt="Loading"
          />
        </div>
      )}
    </div>
  );
};

export default App;
