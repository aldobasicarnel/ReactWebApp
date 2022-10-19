const ProductDetailItem = (props) => {
  const {
    id,
    brand,
    title,
    description,
    price,
    stock,
    category,
    images,
    rating,
  } = props.item;

  return (
    <div key={id}>
      <div>
        <img alt="" src={images} />
      </div>
      <h1>{title}</h1>
      <h2>{brand}</h2>
      <h2>{category}</h2>
      <span>{description}</span>
      <div>
        <span>${price}--</span>
        <span>{stock}--</span>
        <span>Rating {rating}--</span>
      </div>
    </div>
  );
};

export default ProductDetailItem;
