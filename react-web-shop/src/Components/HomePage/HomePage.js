import Slider from "./Slider/Slider";
import WelcomeBar from "./WelcomeBar/WelcomeBar";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";

import "./HomePage.css";

const HomePage = ({ products }) => {
  return (
    <div className="home">
      <Slider />
      <WelcomeBar />
      <h3 className="title-fp">Featured Products</h3>
      <FeaturedProducts products={products} />
    </div>
  );
};

export default HomePage;
