import "./ProductDetailItem.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../Store/Cart-Slice";

const ProductDetailItem = (props) => {
  const [moveImageOne, setMoveImageOne] = useState(false);
  const [moveImageTwo, setMoveImageTwo] = useState(false);
  const [moveImageThree, setMoveImageThree] = useState(false);

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

  const arrowNextHandler = () => {
    if (!moveImageOne) {
      setMoveImageOne(!moveImageOne);
      setMoveImageTwo(false);
      setMoveImageThree(false);
    } else if (!moveImageTwo) {
      setMoveImageOne(moveImageOne);
      setMoveImageTwo(!moveImageTwo);
      setMoveImageThree(moveImageThree);
    } else if (!moveImageThree) {
      setMoveImageOne(moveImageOne);
      setMoveImageTwo(moveImageTwo);
      setMoveImageThree(!moveImageThree);
    } else {
      setMoveImageOne(false);
      setMoveImageTwo(false);
      setMoveImageThree(false);
    }
  };

  const arrowBackHandler = () => {
    if (!moveImageOne) {
      setMoveImageOne(moveImageOne);
      setMoveImageTwo(false);
      setMoveImageThree(false);
    } else if (!moveImageTwo) {
      setMoveImageOne(!moveImageOne);
      setMoveImageTwo(moveImageTwo);
      setMoveImageThree(moveImageThree);
    } else if (!moveImageThree) {
      setMoveImageOne(moveImageOne);
      setMoveImageTwo(!moveImageTwo);
      setMoveImageThree(moveImageThree);
    } else {
      setMoveImageOne(false);
      setMoveImageTwo(false);
      setMoveImageThree(false);
    }
  };

  return (
    <div className="detail-container">
      <div className="image-s-c">
        <div
          className={`detail-image ${moveImageOne ? "one" : ""} ${
            moveImageTwo ? "two" : ""
          } ${moveImageThree ? "three" : ""}`}
          key={id}
        >
          {images.map((img) => (
            <img className="d-img" alt="" src={img} />
          ))}
        </div>
        <div className="images-cont">
          <button onClick={arrowBackHandler} className="img-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </button>
          <button onClick={arrowNextHandler} className="img-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </button>
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
