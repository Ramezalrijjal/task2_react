// Navbar.js
import React from 'react';
import { Link,Outlet } from 'react-router-dom';

function Navbar() {
  return (
    
    <nav>
      <ul>
        <li>
          <Link to="/"> Home page</Link>
        </li>
        <li>
          <Link to="/signup">signup</Link>
        </li>
        <li>
          <Link to="/login">login </Link>
        </li>
      </ul>
    </nav>
    
    
  );
}

export default Navbar;
