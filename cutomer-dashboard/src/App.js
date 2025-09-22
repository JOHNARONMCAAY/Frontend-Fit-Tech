<<<<<<< HEAD
import React from "react";
import DripNStyle from "./components/DripNStyle";
import Categories from "./components/Categories";
import Products from "./components/Products";
import "./styles/Footer.css";

function App() {
  return (
    <>
      <DripNStyle />   {/* Header + Hero */}
      <Categories />   {/* Tops, Bottoms, Men, Women */}
      <Products />     {/* Product Grid */}
      <footer className="footer">
        <p className="footer-text">© 2024 Drip N Style. All Rights Reserved.</p>
      </footer>
    </>
=======
import React from 'react';
<<<<<<< HEAD
import RegisterPage from './components/RegisterPage';

function App() {
  return (
    <div className="App">
      <RegisterPage />
=======
import LoginPage from './components/LoginPage';

function App() {
  return (
    <div>
      <LoginPage />
>>>>>>> 854ed96e12f9c08ddd2a52d0a066f0e2b6ceb03f
    </div>
>>>>>>> 37428d4ca4136eed5f32f7b4232f8a080a3a8f93
  );
}

export default App;
