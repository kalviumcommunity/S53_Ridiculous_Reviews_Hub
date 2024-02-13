import React from 'react';
import '../Styles/navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <h1 className="navbar-brand">Ridiculous Reviews Hub</h1>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="/" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/products" className="nav-link">Products</a>
                    </li>
                    <li className="nav-item">
                        <a href="/about" className="nav-link">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a href="/contact" className="nav-link">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
