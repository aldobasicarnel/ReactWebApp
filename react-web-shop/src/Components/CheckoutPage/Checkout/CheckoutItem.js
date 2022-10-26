import { useDispatch } from "react-redux";

import { cartActions } from "../../Store/Cart-Slice";

const CheckoutItem = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        img: props.img,
        name: props.title,
        price: props.price,
        totalPrice: props.totalPrice,
        quantity: props.quantity,
      })
    );
  };

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(props.id));
  };

  const deleteItemHandler = () => {
    dispatch(cartActions.deleteItemFromCart(props.id));
  };

  return (
    <div key={props.id} className="product-info">
      <button className="delete-btn" onClick={deleteItemHandler}>
        X
      </button>
      <img className="info-img" src={props.img} alt=""></img>
      <div className="desc-info">
        <span className="desc-name">{props.title}</span>
        <span className="desc-price">${props.totalPrice}</span>
        <div className="desc-btns">
          <button onClick={removeItemHandler}>-</button>

          <button onClick={addToCartHandler}>+</button>
        </div>
        <div className="quantity">
          <span className="desc-quan">X{props.quantity}</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;

/*   <Input
            input={{
              id: "amount_" + props.id,
              type: "number",
              min: "1",
              max: "5",
              step: "1",
              defaultValue: "1",
            }}
          />
          <button onInputCartHandler={addFromInputHandler}>Add</button> */
