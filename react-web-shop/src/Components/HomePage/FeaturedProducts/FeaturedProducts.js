import "./FeaturedProducts.css";
import Products from "./Products";

const FeaturedProducts = ({ images }) => {
  return (
    <div className="fp-container">
      {images.map((item) => (
        <Products
          key={item.id}
          id={item.id}
          img={item.img}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
    </div>
  );
};

export default FeaturedProducts;
