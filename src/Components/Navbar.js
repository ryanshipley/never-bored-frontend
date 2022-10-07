import React from 'react'
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <img src="https://imgur.com/UmxUBos.png" alt="app-logo" />
      </Link>
      <Link to="/" className='align-center'>
        <h2>TheNeverBoredCouple</h2>
      </Link>
    </nav>
  );
}

export default Navbar;