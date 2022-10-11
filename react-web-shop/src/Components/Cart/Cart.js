import "./Cart.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [showCartList, setShowCartList] = useState(false);

  const showCartHandler = () => {
    setShowCartList(!showCartList);
  };

  return (
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
      </button>{" "}
      <span className="badge">{0}</span>
      <div className={`dropdown-content ${showCartList ? "show" : ""}`}>
        <div className="cart-price">
          <p className="cart-pr-content">Your Cart:</p>
          <span className="cart-pr-content">1x60$</span>
        </div>
        <Link to="/checkout">
          <button className="checkout-btn">View Cart</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
