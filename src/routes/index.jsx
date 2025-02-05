import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import Cart from "../pages/cart";
import Customers from "../pages/Customers";
import Statistics from "../pages/statistics";
import Mainlayout from "../mainlayout";
import Settings from "../pages/settings/inedx";

const RouteComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        <Route path="/products" element={<App />} />
      </Routes>
    </>
  );
};

export default RouteComponent;
