import "./Checkout.css";
import { useSelector } from "react-redux";
import CheckoutItem from "./CheckoutItem";

const Checkout = (props) => {
  const totalAmount = useSelector((state) => state.totalAmount);

  const items = useSelector((state) => state.items);

  return (
    <div className="flexbox-container">
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
              <p className="price">Subtotal:</p> <p className="price">${}</p>
            </div>
            <div className="shipping-info">
              <p className="shipping">Shipping:</p>
              <a href="#">Add Info</a>
            </div>
            <div className="total-amount">
              <p className="amount">Grand Total:</p>
              <p className="amount">$265</p>
            </div>
          </div>

          <button className="order-btn">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
