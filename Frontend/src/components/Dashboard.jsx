// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const [token, setToken] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Extract the JWT token from the URL query string
    const queryParams = new URLSearchParams(location.search);
    const jwtToken = queryParams.get('token');
    if (jwtToken) {
      setToken(jwtToken);
      localStorage.setItem('jwtToken', jwtToken);
    }
  }, [location.search]);

  return (
    <div>
      <h1>Welcome to your Dashboard</h1>
      {token ? <p>Authenticated with Google! Your token: {token}</p> : <p>Please login.</p>}
    </div>
  );
};

export default Dashboard;
