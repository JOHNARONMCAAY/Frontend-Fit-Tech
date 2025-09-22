import React from "react";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-circle">
        <h1 className="hero-logo">DNS</h1>
      </div>
      <h2 className="hero-title">Elevate Your Wardrobe</h2>
      <p className="hero-subtitle">
        Discover our curated collection of premium clothing, designed for the
        modern individual who values quality, style, and comfort.
      </p>
      <div className="hero-actions">
        <a href="#" className="btn-primary">
          Shop New Arrivals
        </a>
        <a href="#" className="btn-secondary">
          Learn More
        </a>
      </div>
    </section>
  );
}
