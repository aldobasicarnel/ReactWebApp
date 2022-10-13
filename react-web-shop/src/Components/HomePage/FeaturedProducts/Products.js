import "./Products.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/Cart-Slice";

const Products = ({ id, img, title, quantity, price }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: id,
        img: img,
        name: title,
        price: price,
        quantity: quantity,
      })
    );
  };

  return (
    <div className="product-container">
      <img className="image" src={img} alt="" />
      <div className="description">
        <h3 className="product-title">{title}</h3>
        <span className="product-price">${price}</span>
        <button onClick={addToCartHandler} className="product-btn">
          Cart +
        </button>
      </div>
    </div>
  );
};

export default Products;
