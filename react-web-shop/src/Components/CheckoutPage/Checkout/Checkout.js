import "./Checkout.css";
import { cartActions } from "../../Store/Cart-Slice";
import { useSelector, useDispatch } from "react-redux";

const Checkout = () => {
  const items = useSelector((state) => state.items);
  const totalAmount = useSelector((state) => state.totalAmount);
  const dispatch = useDispatch();

  const addProductHandler = () => {};

  const removeProductHandler = (id) => {
    dispatch(
      cartActions.removeItemFromCart({
        id: id,
      })
    );
  };

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
          <div key={item.id} className="product-info">
            <button className="delete-btn">X</button>
            <img className="info-img" src={item.img} alt=""></img>
            <div className="desc-info">
              <span className="desc-name">{item.name}</span>
              <span className="desc-price">${item.price}</span>
              <div className="desc-btns">
                <button onClick={addProductHandler}>-</button>
                <input className="desc-amount" type="number" />
                <button>+</button>
              </div>
            </div>
          </div>
        ))}
        <div className="checkout-info">
          <div className="order-info">
            <div className="price-info">
              <p className="price">Subtotal:</p>
              <p className="price">$250</p>
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
