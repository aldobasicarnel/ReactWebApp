import "./Products.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/Cart-Slice";
import { Link } from "react-router-dom";

const Products = ({ id, thumbnail, title, quantity, price }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: id,
        img: thumbnail,
        name: title,
        price: price,
        quantity: quantity,
      })
    );
  };

  return (
    <div>
      <div key={id} className="product-container">
        <img className="image" src={thumbnail} alt="" />
        <div className="description">
          <h3 className="product-title">
            <Link className="product-link" to={`/products/${id}`}>
              {title}
            </Link>
          </h3>
          <span className="product-price">${price.toFixed()}</span>
          <button onClick={addToCartHandler} className="product-btn">
            Cart +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
