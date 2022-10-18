import "./FeaturedProducts.css";
import Products from "./Products";

const FeaturedProducts = ({ products }) => {
  return (
    <div className="fp-container">
      {products.map((item) => (
        <Products
          key={item.id}
          id={item.id}
          thumbnail={item.thumbnail}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
    </div>
  );
};

export default FeaturedProducts;
