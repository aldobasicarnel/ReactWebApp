import "./Cart.css";
import CartItem from "./CartItem";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = ({ id, title, price, quantity }) => {
  const location = useLocation();

  const [showCartList, setShowCartList] = useState(false);
  const badge = useSelector((state) => state.totalQuantity);

  const cartItems = useSelector((state) => state.items);

  const showCartHandler = () => {
    setShowCartList(!showCartList);
  };

  const closeCartHandler = () => {
    setShowCartList(false);
  };

  useEffect(() => {
    closeCartHandler();
  }, [location]);

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
      <span className="badge">{badge}</span>
      <div className={`dropdown-content ${showCartList ? "show" : ""}`}>
        <span className="cart-pr-title">Cart</span>
        <div className="cart-price">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={{
                title: item.name,
                price: item.price,
                totalPrice: item.totalPrice,
                id: item.id,
                quantity: item.quantity,
              }}
            />
          ))}
        </div>
        <button className="checkout-btn">
          <Link to="/checkout" className="link">
            Checkout
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Cart;
