import React, { useState } from 'react';
import './LoginPage.css';
import logoImage from '../assets/drip-n-style.jpg';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in with email: ${email}`);
  };

  const handleGoogleSignIn = () => {
    alert('Google Sign-In clicked (not implemented)');
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-circle">
          <img src={logoImage} alt="Drip N Style Clothing Logo" className="logo-image" />
        </div>
        <h1>Drip N Style</h1>

        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <div className="password-wrapper">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="toggle-password-btn"
              onClick={togglePasswordVisibility}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              ) : (
            
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.94 17.94A10.06 10.06 0 0 1 12 20c-7 0-11-8-11-8a17.61 17.61 0 0 1 5.06-6.63" />
                  <path d="M1 1l22 22" />
                </svg>
              )}
            </button>
          </div>

          <button type="submit" className="btn-login">
            Login
          </button>
        </form>

        <div
          style={{
            display: 'flex',
            gap: '40px',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <div className="social-button-wrapper">
            <button
              className="social-button"
              onClick={handleGoogleSignIn}
              aria-label="Continue with Google"
            >
              <img
                src="https://tse4.mm.bing.net/th/id/OIP.t1rsr55wqbF2BJfjO81tsQHaHl?pid=Api&P=0&h=180"
                alt="Google logo"
              />
            </button>
            <p>Continue with Google</p>
          </div>
        </div>

        <p className="signup-text">
          Don't have an account?{' '}
          <button
            className="signup-link"
            onClick={(e) => {
              e.preventDefault();
              alert('Redirect to signup page (not implemented)');
            }}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
