import React from "react";
import "../styles/Features.css";

export default function Features() {
  const features = [
    {
      id: 1,
      icon: "local_shipping",
      title: "Fast Shipping",
      desc: "Get your order delivered to your doorstep in record time. We pride ourselves on efficient and reliable shipping.",
    },
    {
      id: 2,
      icon: "verified_user",
      title: "Secure Payments",
      desc: "Shop with confidence. Our secure payment gateway ensures your transactions are safe and protected.",
    },
    {
      id: 3,
      icon: "autorenew",
      title: "Easy Returns",
      desc: "Not the perfect fit? No problem. Our hassle-free return policy makes exchanges and returns simple and easy.",
    },
  ];

  return (
    <section className="features">
      <div className="features-grid">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="feature-icon">
              <span className="material-symbols-outlined">{feature.icon}</span>
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-desc">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
