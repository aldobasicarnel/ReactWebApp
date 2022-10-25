import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Cart from "../../Cart/Cart";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showPhoneList, setShowPhoneList] = useState(false);

  const location = useLocation();

  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };
  const closeMenuHandler = () => {
    setShowMenu(false);
  };

  const listShowHandler = () => {
    if (showPhoneList) {
      setShowPhoneList(false);
    } else {
      setShowPhoneList(true);
    }
  };

  useEffect(() => {
    closeMenuHandler();
    setShowPhoneList(true);
  }, [location]);

  return (
    <div>
      <nav className="nav ">
        <button className="open-nav" onClick={showMenuHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <div className={`navbar-list ${showMenu ? " active" : ""}`}>
          <button className="close-nav" onClick={closeMenuHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </button>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="drop-btn">
              <Link to="/shop">All Products</Link>
              <button
                className={`phone-btn ${showPhoneList ? "active" : ""}`}
                onClick={listShowHandler}
              >
                +
              </button>
              <div className={`drop-menu ${!showPhoneList ? "active" : ""}`}>
                <Link className="link" to="/shop">
                  TV
                </Link>
                <Link className="link" to="/shop">
                  Sofas
                </Link>
                <Link className="link" to="/shop">
                  Desks
                </Link>
              </div>
            </li>
            <li>
              <Link to="/about-us">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <h3 className="title">Patio</h3>
        <div className="cart-nav">
          <Cart />
        </div>
      </nav>

      <div
        onClick={closeMenuHandler}
        className={`overlay  ${!showMenu ? "" : "visible"} `}
      ></div>
    </div>
  );
};

export default NavBar;
