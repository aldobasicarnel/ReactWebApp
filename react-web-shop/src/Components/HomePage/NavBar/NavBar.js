import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showPhoneList, setShowPhoneList] = useState(false);

  const [showCartList, setShowCartList] = useState(false);
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

  const showCartHandler = () => {
    setShowCartList(!showCartList);
  };

  useEffect(() => {
    closeMenuHandler();
    setShowPhoneList(true);
  }, [location]);

  return (
    <nav>
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
      <div className="cart">
        <button onClick={showCartHandler} className="drop-cart-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            fill="currentColor"
            className="bi bi-bag"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
          </svg>
        </button>
        <div className={`dropdown-content ${showCartList ? "" : "show"}`}>
          <div className="cart-price">
            <p>Your Cart:</p>
            <span>1x60$</span>
          </div>
          <Link to="/checkout">
            <button className="checkout-btn">View Cart</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

/* 
<div className="show-menu">
          <img className="cart-img" src="" alt="product_img" />
          <p>Your Cart:</p>
          <span>1x60$</span>
          <button>View Cart</button>
        </div>
*/
