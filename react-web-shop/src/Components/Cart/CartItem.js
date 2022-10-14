import { cartActions } from "../Store/Cart-Slice";
import { useDispatch } from "react-redux";
const CartItem = (props) => {
  const { title, totalPrice, id, price, quantity } = props.item;
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(
      cartActions.addItemToCart({
        id: id,
        name: title,
        price: price,
        totalPrice: totalPrice,
        quantity: quantity,
      })
    );
  };

  const removeItemFromCart = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };
  return (
    <div key={id} className="cart-pr-container">
      <div className="title-container">
        <p className="cart-pr-name">{title}</p>
        <span className="cart-pr-price">${totalPrice}</span>
      </div>
      <div className="cart-actions">
        <p className="cart-pr-quan">x{quantity}</p>
        <div className="cart-btns">
          <button className="cart-btn" onClick={removeItemFromCart}>
            -
          </button>
          <button className="cart-btn" onClick={addItemToCart}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
