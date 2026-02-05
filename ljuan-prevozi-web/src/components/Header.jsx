import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img src="/lev.webp" alt="Moder Lev Logo" className="logo" />
        <h1 className="site-title">Moder Lev</h1>
        <nav className="main-nav">
          <ul>
            <li><a href="#services">Storitve</a></li>
            <li><a href="#about">O nas</a></li>
            <li><a href="#pricing">Cenik</a></li>
            <li><a href="#contact">Kontakt</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
