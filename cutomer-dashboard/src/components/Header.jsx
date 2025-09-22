import React from "react";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      
      <div className="brand">
        <div className="brand-icon">
          <svg className="brand-svg" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 2C6.48 2 2 6.48..."
              opacity="0.3"
            ></path>
            <path d="M16.24 16.24L12 12l4.24-4.24..." />
          </svg>
        </div>
        <h2 className="brand-title">Drip N Style</h2>
      </div>

      
      <nav className="nav">
        {["Home", "Shop", "About", "Contact", "Account"].map((link) => (
          <a key={link} href="#" className="nav-link">
            {link}
          </a>
        ))}
      </nav>

      
      <div className="header-actions">
        {["search", "person", "shopping_bag", "menu"].map((icon, i) => (
          <button key={i} className="header-btn">
            <span className="material-symbols-outlined">{icon}</span>
          </button>
        ))}
      </div>
    </header>
  );
}
