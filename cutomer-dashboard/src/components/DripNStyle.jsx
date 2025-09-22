import React from "react";
import "../styles/DripNStyle.css";

export default function DripNStyle() {
  return (
    <div className="dripnstyle">

      <header className="header">
        <div className="brand">
          <div className="brand-icon">
            <img
              src="/drip-n-style.jpg"
              alt="Drip N Style Logo"
              className="brand-logo"
            />
          </div>
          <h2 className="brand-title">Drip N Style</h2>
        </div>

        
        <nav className="nav">
          {["Home", "Shop", "About", "Contact", "Account"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="nav-link"
            >
              {link}
            </a>
          ))}
        </nav>

        
        <div className="header-actions">
          {["search", "person", "shopping_bag", "menu"].map((icon, i) => (
            <button key={i} className={`header-btn ${icon}`}>
              <span className="material-symbols-outlined">{icon}</span>
            </button>
          ))}
        </div>
      </header>

      
      <main className="main">
        <section id="home" className="hero">
          <div className="hero-circle">
            <img
              src="/drip-n-style.jpg"
              alt="Drip N Style"
              className="hero-logo"
            />
          </div>
          <h2 className="hero-title">Elevate Your Wardrobe</h2>
          <p className="hero-subtitle">
            Discover our curated collection of premium clothing, designed for the
            modern individual who values quality, style, and comfort.
          </p>
          <div className="hero-actions">
            <a href="#shop" className="btn-primary">
              Shop New Arrivals
            </a>
            <a href="#about" className="btn-secondary">
              Learn More
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
