import React, { useState } from "react";
import "../styles/Settings.css";

export default function Settings() {
  // State for toggles
  const [salesAlerts, setSalesAlerts] = useState(true);
  const [lowStockAlerts, setLowStockAlerts] = useState(false);
  const [twoFactor, setTwoFactor] = useState(true);

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <p className="subtitle">Manage your admin dashboard settings.</p>

      {/* General Settings */}
      <section className="settings-section">
        <h2>General Settings</h2>
        <div className="form-grid">
          <div>
            <label>Brand Name</label>
            <input type="text" defaultValue="Drip N Style" />
          </div>
          <div>
            <label>Contact Email</label>
            <input type="email" defaultValue="contact@dripnstyle.com" />
          </div>
          <div>
            <label>Contact Phone</label>
            <input type="text" defaultValue="+1 (555) 123-4567" />
          </div>
        </div>
      </section>

      {/* Notifications */}
      <section className="settings-section">
        <h2>Notification Preferences</h2>

        <div className="toggle-row">
          <div>
            <strong>Sales Alerts</strong>
            <p>Receive email alerts for new sales.</p>
          </div>
          <label className="switch">
            <input
              type="checkbox"
              checked={salesAlerts}
              onChange={() => setSalesAlerts(!salesAlerts)}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="toggle-row">
          <div>
            <strong>Low Stock Alerts</strong>
            <p>Receive email alerts when product stock is low.</p>
          </div>
          <label className="switch">
            <input
              type="checkbox"
              checked={lowStockAlerts}
              onChange={() => setLowStockAlerts(!lowStockAlerts)}
            />
            <span className="slider"></span>
          </label>
        </div>
      </section>

      {/* Security */}
      <section className="settings-section">
        <h2>Security</h2>
        <div className="form-grid">
          <div>
            <label>Password Policy</label>
            <input
              type="text"
              placeholder="e.g., Minimum 8 characters, 1 uppercase, 1 number"
            />
          </div>
        </div>

        <div className="toggle-row">
          <div>
            <strong>Two-Factor Authentication</strong>
            <p>Require 2FA for all staff members.</p>
          </div>
          <label className="switch">
            <input
              type="checkbox"
              checked={twoFactor}
              onChange={() => setTwoFactor(!twoFactor)}
            />
            <span className="slider"></span>
          </label>
        </div>
      </section>

      {/* Integrations */}
      <section className="settings-section">
        <h2>Integrations</h2>
        <div className="form-grid">
          <div>
            <label>Payment Gateway</label>
            <select defaultValue="Stripe">
              <option>Stripe</option>
              <option>PayPal</option>
              <option>Square</option>
            </select>
          </div>
          <div>
            <label>Analytics Tool</label>
            <select defaultValue="Google Analytics">
              <option>Google Analytics</option>
              <option>Mixpanel</option>
              <option>Hotjar</option>
            </select>
          </div>
        </div>
      </section>

      {/* Save Button */}
      <div className="save-btn-wrapper">
        <button className="save-btn">Save Changes</button>
      </div>
    </div>
  );
}
