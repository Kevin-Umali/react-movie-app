import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/fontawesome-free-regular'

export const Header = () => {
  return (
    <>
      <nav>
        <a href="#" className="logo">
          <img src="/img/logo.png" />
        </a>
        <input type="checkbox" className="menu-btn" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">TV Shows</a>
          </li>
          <li>
            <a href="#">Hollywood</a>
          </li>
          <li>
            <a href="#">Horror</a>
          </li>
        </ul>
        <div className="search">
          <input type="text" placeholder="Find Your Favourtie Movies" />
          <FontAwesomeIcon icon={faCircle}/>
        </div>
      </nav>
    </>
  );
};
