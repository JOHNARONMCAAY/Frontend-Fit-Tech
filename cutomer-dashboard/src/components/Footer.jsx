import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-col">
          <h2 className="footer-logo">Anding’s Furniture</h2>
          <p className="footer-text">
            Quality furniture that brings comfort and style to your home.
            Trusted since 1990.
          </p>
        </div>

        
        <div className="footer-col">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        
        <div className="footer-col">
          <h3 className="footer-title">Contact</h3>
          <p className="footer-text">📍 Balayan, Batangas, Philippines</p>
          <p className="footer-text">📞 +63 912 345 6789</p>
          <p className="footer-text">✉️ support@DripNStyle.com</p>
        </div>

        
        <div className="footer-col">
          <h3 className="footer-title">Follow Us</h3>
          <div className="social-icons">
            <a href="#"><span className="material-symbols-outlined">facebook</span></a>
            <a href="#"><span className="material-symbols-outlined">mail</span></a>
            <a href="#"><span className="material-symbols-outlined">share</span></a>
          </div>
        </div>
      </div>

      
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Anding’s Furniture. All rights reserved.</p>
      </div>
    </footer>
  );
}
