import "./ProductDetailItem.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../Store/Cart-Slice";

const ProductDetailItem = (props) => {
  const [moveImage, setMoveImage] = useState(false);

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

  const btnLists = ["first", "second", "third", "fourth"];

  const btn = btnLists.map((btn) => btn);

  const imageOneHandler = () => {
    setMoveImage(!moveImage);
  };

  return (
    <div className="detail-container">
      {" "}
      <div className="image-s-c">
        <div className={`detail-image ${moveImage ? "one" : ""}`} key={id}>
          {images.map((img) => (
            <img className="d-img" alt="" src={img} />
          ))}
        </div>
        <div className="images-cont">
          {images.map((image) => (
            <button onClick={imageOneHandler} className={btn}>
              <img className="c-img" alt="" src={image} />
            </button>
          ))}
        </div>
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
