import React, { useState } from 'react';
import "../Styles/Login.css";
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081';

function Login({ switchToSignup }: { switchToSignup: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/signin`, { email, password });
      console.log('Login successful:', response.data);
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="container-login">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Login</h2>
              {error && <p className="text-danger">{error}</p>}
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="login-email">Email:</label>
                  <input
                    type="email"
                    id="login-email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="login-password">Password:</label>
                  <input
                    type="password"
                    id="login-password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                <p className="text-center mt-3">
                  Don't have an account? <button onClick={switchToSignup} className="btn btn-link">Sign Up</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Signup({ switchToLogin }: { switchToLogin: () => void }) {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/users`, { name, userName, email, password });
      console.log('Signup successful:', response.data);
      alert('Signup successful!');
      setName('');
      setUserName('');
      setEmail('');
      setPassword('');
      switchToLogin();
    } catch (err) {
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <div className="container-login">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Sign Up</h2>
              {error && <p className="text-danger">{error}</p>}
              <form onSubmit={handleSignup}>
                <div className="form-group">
                  <label htmlFor="signup-name">Name:</label>
                  <input
                    type="text"
                    id="signup-name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="signup-username">Username:</label>
                  <input
                    type="text"
                    id="signup-username"
                    className="form-control"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="signup-email">Email:</label>
                  <input
                    type="email"
                    id="signup-email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="signup-password">Password:</label>
                  <input
                    type="password"
                    id="signup-password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="text-center mt-3">
                  Already have an account? <button onClick={switchToLogin} className="btn btn-link">Sign In</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoginPage() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="App">
      {isSignup ? (
        <Signup switchToLogin={() => setIsSignup(false)} />
      ) : (
        <Login switchToSignup={() => setIsSignup(true)} />
      )}
    </div>
  );
}

export default LoginPage;
