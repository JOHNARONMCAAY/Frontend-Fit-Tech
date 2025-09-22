import React, { useState } from 'react';
import './RegisterPage.css';
import { Link } from 'react-router-dom'; 

const RegisterPage = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    birthday: '',
    contact: '',
    address: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registering user: ${form.fullName}`);
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter full name"
                value={form.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="birthday">Birthday</label>
              <input
                id="birthday"
                name="birthday"
                type="date"
                value={form.birthday}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact">Contact Number</label>
              <input
                id="contact"
                name="contact"
                type="tel"
                placeholder="Enter contact number"
                value={form.contact}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                id="address"
                name="address"
                type="text"
                placeholder="Enter address"
                value={form.address}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="divider"></div>

          <div className="social-wrapper">
            <div className="social-button-wrapper">
              <button
                type="button"
                className="social-button"
                onClick={() => alert('Google Sign Up clicked')}
              >
                <img
                  src="https://tse4.mm.bing.net/th/id/OIP.t1rsr55wqbF2BJfjO81tsQHaHl?pid=Api&P=0&h=180"
                  alt="Google logo"
                />
              </button>
              <p>Sign up with Google</p>
            </div>
          </div>

          <button type="submit" className="btn-register">
            Register
          </button>

          
          <p className="login-link">
            Already have an account?{' '}
            <Link to="/">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
