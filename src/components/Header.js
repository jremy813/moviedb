import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h1>MovieDB</h1>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">TV</a>
        </li>
        <li>
          <a href="#">Movies</a>
        </li>
        <li>
          <a href="#">Search</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
