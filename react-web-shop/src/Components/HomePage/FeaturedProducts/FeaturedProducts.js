import "./FeaturedProducts.css";
import Products from "./Products";

import WallClock from "../Slider/images/wall-clock.jpeg";
import LaptopBag from "../Slider/images/laptop-bag.jpeg";
import Lamp from "../Slider/images/lamp.png";

const productItems = [
  {
    id: 1,
    img: WallClock,
    title: "Wall clock",
    price: 250,
    quantity: 0,
  },
  {
    id: 2,
    img: LaptopBag,
    title: "Laptop Bag",
    price: 150,
    quantity: 0,
  },
  { id: 3, img: Lamp, title: "Lamp", price: 50, quantity: 0 },
];

const FeaturedProducts = () => {
  return (
    <div className="fp-container">
      {productItems.map((item) => (
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
