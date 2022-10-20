import "./ProductDetailItem.css";

const ProductDetailItem = (props) => {
  const {
    id,
    title,
    thumbnail,
    brand,
    category,
    description,
    price,
    stock,
    rating,
  } = props.products;

  return (
    <div className="detail-container">
      <div className="detail-image" key={id}>
        <img className="d-img" alt="" src={thumbnail} />
      </div>
      <div className="detail-info">
        <div className="details-title">
          <h1 className="d-title">{title}</h1>
          <div className="title-desc">
            <h2 className="d-brand">{brand}</h2>
            <h2 className="d-category">{category}</h2>
          </div>
        </div>
        <div className="details-price">
          <span>{description}</span>
          <div className="price-desc">
            <span>${price}</span>
            <span>On Stock: {stock}</span>
            <span>Rating {rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailItem;
