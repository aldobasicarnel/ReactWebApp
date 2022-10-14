import "./Checkout.css";
import { useSelector } from "react-redux";
import CheckoutItem from "./CheckoutItem";
import { Link } from "react-router-dom";
import Tag from "../Tag";

const Checkout = (props) => {
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

  return (
    <div className="flexbox-container">
      <Tag tag={`1`} />
      <div className="flexbox">
        {" "}
        <div className="checkout-title">
          <h5>Items</h5>
          <h5>Name</h5>
          <h5>Price</h5>
          <h5>Quantity</h5>
        </div>
        {items.map((item) => (
          <CheckoutItem
            key={item.id}
            item={{
              id: item.id,
              img: item.img,
              title: item.name,
              price: item.price,
              totalPrice: item.totalPrice,
              quantity: item.quantity,
            }}
          />
        ))}
        <div className="checkout-info">
          <div className="order-info">
            <div className="price-info">
              <p className="price">Subtotal:</p>{" "}
              <p className="price">${amount}</p>
            </div>
            <div className="shipping-info">
              <p className="shipping">Shipping:</p>
              <a href="#">Add Info</a>
            </div>
            <div className="total-amount">
              <p className="amount">Grand Total:</p>
              <p className="amount">${grandTotal}</p>
            </div>
          </div>

          <button className="order-btn">
            <Link to="" className="link-shiping">
              Proceed to checkout
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
