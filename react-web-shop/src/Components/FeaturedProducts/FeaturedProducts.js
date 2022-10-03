import "./FeaturedProducts.css";
import Products from "./Products";

const FeaturedProducts = ({ images }) => {
  return (
    <>
      <h3>Featured Products</h3>
      {images.map((img) => (
        <Products
          key={img.id}
          img={img.img}
          title={img.title}
          price={img.price}
        />
      ))}
    </>
  );
};

export default FeaturedProducts;
