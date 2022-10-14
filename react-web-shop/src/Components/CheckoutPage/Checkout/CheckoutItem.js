import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/Cart-Slice";

const CheckoutItem = (props) => {
  const dispatch = useDispatch();
  const { id, title, img, price, totalPrice, quantity } = props.item;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: id,
        img: img,
        name: title,
        price: price,
        totalPrice: totalPrice,
        quantity: quantity,
      })
    );
  };

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const deleteItemHandler = () => {
    dispatch(cartActions.deleteItemFromCart(id));
  };

  return (
    <div key={id} className="product-info">
      <button className="delete-btn" onClick={deleteItemHandler}>
        X
      </button>
      <img className="info-img" src={img} alt=""></img>
      <div className="desc-info">
        <span className="desc-name">{title}</span>
        <span className="desc-price">${totalPrice}</span>
        <div className="desc-btns">
          <button onClick={removeItemHandler}>-</button>
          <input className="desc-amount" type="number" />
          <button onClick={addToCartHandler}>+</button>
        </div>
        <div className="quantity">
          <span className="desc-quan">X{quantity}</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
