import "./FeaturedProducts.css";
import Products from "./Products";

const FeaturedProducts = ({ images }) => {
  return (
    <div className="fp-container">
      {images.map((img) => (
        <Products
          key={img.id}
          img={img.img}
          title={img.title}
          price={img.price}
        />
      ))}
    </div>
  );
};

export default FeaturedProducts;
