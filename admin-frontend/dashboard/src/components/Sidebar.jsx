import React from "react";
import "../styles/Sidebar.css";

export default function Sidebar({ isOpen, activePage, setActivePage, closeSidebar }) {
  const menuItems = [
    {
      name: "Dashboard",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 12l9-9 9 9"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 21V9h6v12"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Sales",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 11h18M3 6h18M3 16h18"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      name: "Products",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </svg>
      ),
    },
    {
      name: "Users",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle
            cx="12"
            cy="8"
            r="3"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="M21 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </svg>
      ),
    },
    {
      name: "Staff",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2l3 7h7l-5.5 4.5L19 21l-7-4-7 4 1.5-7.5L2 9h7z"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>
      ),
    },
    {
      name: "Settings",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 15a3 3 0 100-6 3 3 0 000 6z"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="M19.4 15a7 7 0 10-14.8 0"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Sidebar container */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-inner">
          <div className="brand">
            <div className="brand-title">Drip N Style</div>
            <div className="brand-sub">Admin</div>
          </div>

          {/* Navigation menu */}
          <nav className="nav">
            <ul>
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className={`nav-item ${activePage === item.name ? "active" : ""}`}
                  onClick={() => {
                    setActivePage(item.name);
                    closeSidebar();
                  }}
                >
                  <span className="icon">{item.icon}</span>
                  <span className="label">{item.name}</span>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
