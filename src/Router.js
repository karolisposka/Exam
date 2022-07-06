import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Add from "./pages/Add";

const token = localStorage.getItem("token");

const publicLinks = [
  {
    path: "/register",
    name: "Register",
  },
  {
    path: "/Login",
    name: "Login",
  },
];

const privateLinks = [
  {
    path: "/add",
    name: "Add",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
  },
  {
    path: "/",
    name: "Home",
  },
];

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation links={token ? privateLinks : publicLinks} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/add" element={<Add />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
