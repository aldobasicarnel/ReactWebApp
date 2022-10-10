import "./Checkout.css";
import img from "../../HomePage/Slider/images/jeans.png";

const Checkout = () => {
  return (
    <div className="flexbox-container">
      <div className="checkout-title">
        <h5>Items</h5>
        <h5>Name</h5>
        <h5>Price</h5>
        <h5>Quantity</h5>
      </div>
      <div className="flexbox">
        <div className="product-info">
          <button className="delete-btn">X</button>
          <img className="info-img" src={img} alt=""></img>
          <div className="desc-info">
            <span className="desc-name">Product Name</span>
            <span className="desc-price">$1100</span>
            <div className="desc-btns">
              <button>-</button>
              <input className="desc-amount" type="number" />
              <button>+</button>
            </div>
          </div>
        </div>
        <div className="checkout-info">
          <div className="price-info">
            <p className="price">Subtotal:</p>
            <p className="price">$244</p>
          </div>
          <div className="shipping-info">
            <p className="shipping">Shipping:</p>
            <a href="#">Add Info</a>
          </div>
          <div className="total-amount">
            <p className="amount">Grand Total:</p>
            <p className="amount">$265</p>
          </div>
          <button className="order-btn">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
