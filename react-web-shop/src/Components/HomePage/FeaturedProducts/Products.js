import "./Products.css";

const Products = ({ img, title, price }) => {
  return (
    <div className="product-container">
      <img className="image" src={img} alt="" />
      <div className="description">
        <h3 className="product-title">{title}</h3>
        <span className="product-price">${price}</span>
        <button className="product-btn">Cart +</button>
      </div>
    </div>
  );
};

export default Products;
