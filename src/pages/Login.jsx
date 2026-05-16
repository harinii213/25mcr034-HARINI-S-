import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Welcome back, ${email}`);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.brand}>Employee Productivity System</div>
        <h2 style={styles.title}>Sign in to continue</h2>
        <form style={styles.form} onSubmit={handleSubmit}>
          <label style={styles.label} htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            placeholder="you@example.com"
            required
          />

          <label style={styles.label} htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            placeholder="Enter your password"
            required
          />

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
        <p style={styles.footerText}>
          New to the system?{' '}
          <a href="/register" style={styles.link}>
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #4f46e5 0%, #0f172a 100%)',
    padding: '24px',
  },
  card: {
    width: '100%',
    maxWidth: '420px',
    padding: '32px',
    borderRadius: '20px',
    background: 'rgba(15, 23, 42, 0.96)',
    boxShadow: '0 24px 80px rgba(15, 23, 42, 0.35)',
    color: '#f8fafc',
  },
  brand: {
    fontSize: '18px',
    fontWeight: '700',
    letterSpacing: '1.2px',
    textTransform: 'uppercase',
    marginBottom: '16px',
    color: '#a5b4fc',
  },
  title: {
    marginBottom: '24px',
    fontSize: '28px',
  },
  form: {
    display: 'grid',
    gap: '16px',
  },
  label: {
    fontSize: '14px',
    color: '#cbd5e1',
  },
  input: {
    width: '100%',
    padding: '12px 14px',
    borderRadius: '12px',
    border: '1px solid #334155',
    background: '#0f172a',
    color: '#f8fafc',
    outline: 'none',
    fontSize: '16px',
  },
  button: {
    marginTop: '8px',
    width: '100%',
    padding: '14px 16px',
    borderRadius: '12px',
    border: 'none',
    background: '#6366f1',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  },
  footerText: {
    marginTop: '20px',
    fontSize: '14px',
    color: '#cbd5e1',
    textAlign: 'center',
  },
  link: {
    color: '#93c5fd',
    textDecoration: 'none',
  },
};

export default Login;
