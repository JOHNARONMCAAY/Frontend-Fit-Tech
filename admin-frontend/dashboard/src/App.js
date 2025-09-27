import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Sales from "./components/Sales";
import Products from "./components/Products";
import Users from "./components/Users";
import Staff from "./components/Staff";
import Settings from "./components/Settings";

import "./styles/global.css";
import "./styles/index.css";
import "./styles/Sidebar.css";
import "./styles/Dashboard.css";
import "./styles/Sales.css";
import "./styles/Products.css";
import "./styles/Users.css";
import "./styles/Staff.css";
import "./styles/Settings.css";

export default function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div className="app-root">
      {/* Hamburger menu button */}
      <div
        className={`hamburger ${sidebarOpen ? "active" : ""}`}
        onClick={toggleSidebar}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        activePage={activePage}
        setActivePage={setActivePage}
        closeSidebar={() => setSidebarOpen(false)}
      />

      {/* Main content area */}
      <main
        className="main-content"
        onClick={() => sidebarOpen && setSidebarOpen(false)}
      >
        {activePage === "Dashboard" && <Dashboard />}
        {activePage === "Sales" && <Sales />}
        {activePage === "Products" && <Products />}
        {activePage === "Users" && <Users />}
        {activePage === "Staff" && <Staff />}
        {activePage === "Settings" && <Settings />}
      </main>
    </div>
  );
}
