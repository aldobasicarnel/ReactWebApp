import "./ProductDetailItem.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../Store/Cart-Slice";

const ProductDetailItem = (props) => {
  const dispatch = useDispatch();

  const {
    id,
    title,
    images,
    brand,
    category,
    description,
    price,
    stock,
    rating,
    quantity,
  } = props.products;

  const stockValue = stock > 0 ? `On Stock` : `Out of stock`;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        img: images,
        name: title,
        price,
        quantity,
      })
    );
  };

  return (
    <div className="detail-container">
      {" "}
      <div className="detail-image" key={id}>
        <img className="d-img" alt="" src={images[0]} />
      </div>
      <div className="details">
        <div className="detail-info">
          <div className="details-title ">
            <h1 className="d-title">{title}</h1>
            <div className="title-desc">
              <h2 className="d-brand">{brand}</h2>
              <h2 className="d-category">{category}</h2>
            </div>
          </div>
          <div className="details-price">
            <span className="desc">{description}</span>
            <div className="price-desc">
              <span className="d-price">${price}</span>
              <span className="d-price">{stockValue}</span>
              <span className="d-price">⭐️{rating}</span>
            </div>
          </div>
        </div>
        <div className="details-btn">
          <button className="d-btn" onClick={addToCartHandler}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailItem;
