import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="bodyy">
        <div className="nav">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <div className="menu">
            <li>
              <Link className="Link" to="/">
                HOME
              </Link>
            </li>
            <li>
              <Link className="Link" to="/Login">
                LOGIN
              </Link>
            </li>
            <li>
              <Link className="Link" to="/Tareas">
                TAREAS
              </Link>
            </li>
            <li>
              <Link className="Link" to="/Contacto">
                CONTACTO
              </Link>
            </li>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
