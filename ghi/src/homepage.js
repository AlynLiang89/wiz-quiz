import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://i.imgur.com/89pNxOm.png" alt="wizard" />
      </div>
      <div className="buttons">
        <Link href="/login"><button className="login-button">Login</button></Link>
        <Link href="/signup"><button className="signup-button">Sign Up</button></Link>
      </div>
    </div>
  );
}

export default HomePage;
