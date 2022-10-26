import "./Checkout.css";
import { useSelector } from "react-redux";
import CheckoutItem from "./CheckoutItem";
import { Link } from "react-router-dom";
import Tag from "../Tag";

const Checkout = () => {
  const totalAmount = useSelector((state) => state.items);
  const items = useSelector((state) => state.items);

  let amount;

  amount = totalAmount
    .filter((item) => {
      return item.totalPrice;
    })
    .reduce((exp, item) => (exp += item.totalPrice), 0);

  let tax = 0.23;
  const taxes = amount * tax;
  const grandTotal = amount + taxes;

  const itemList = items.map((item) => (
    <CheckoutItem
      key={item.id}
      id={item.id}
      img={item.img}
      title={item.name}
      price={item.price}
      totalPrice={item.totalPrice}
      quantity={item.quantity}
    />
  ));

  return (
    <div className="flexbox-container">
      <Tag tag={`1`} />
      <div className="flexbox">
        <div className="checkout-title">
          <h5>Items</h5>
          <h5>Name</h5>
          <h5>Price</h5>
          <h5>Quantity</h5>
        </div>
        {itemList}
        <div className="checkout-info">
          <div className="order-info">
            <div className="price-info">
              <p className="price">Subtotal:</p>{" "}
              <p className="price">${amount.toFixed(2)}</p>
            </div>
            <div className="shipping-info">
              <p className="shipping">Shipping:</p>
              <Link to="/checkout/form">Add Info</Link>
            </div>
            <div className="total-amount">
              <p className="amount">Grand Total:</p>
              <p className="amount">${grandTotal.toFixed(2)}</p>
            </div>
          </div>
          {items.length < 1 ? (
            <p className="empty-text">Cart is empty!</p>
          ) : (
            <button className="order-btn">
              <Link to="/checkout/form" className="link-shiping">
                Proceed to checkout
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Checkout;
