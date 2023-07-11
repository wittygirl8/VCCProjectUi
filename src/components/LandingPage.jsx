import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div>
      <h1>Welcome to the Landing Page</h1>
      <Link to="/add-data">
        <button>Add Data</button>
      </Link>
      <Link to="/read-data">
        <button>Read Data</button>
      </Link>
    </div>
  );
}

export default LandingPage;
