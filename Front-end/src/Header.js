// Header.js
import React from 'react';
import './Header.css'; // Asume you have a CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo"><img src="C:\wamp64\www\movieTicketBooking\img\logo.png"></img></div>
      <nav className="navbar">
        <ul>
          <li><a href="/movies">Movies</a></li>
          <li><a href="/tv-shows">TV Shows</a></li>
          <li><a href="/people">People</a></li>
          <li><a href="/more">More</a></li>
        </ul>
      </nav>
      <div className="user-interaction">
        <span>Welcome, You!</span>
        <button>Logout</button>
      </div>
    </header>
  );
}

export default Header;
