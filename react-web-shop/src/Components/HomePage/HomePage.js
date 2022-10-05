import Slider from "./Slider/Slider";
import WelcomeBar from "./WelcomeBar/WelcomeBar";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";

import "./HomePage.css";

const HomePage = ({ images }) => {
  return (
    <div className="home">
      <Slider images={images} />
      <WelcomeBar />
      <h3 className="title-fp">Featured Products</h3>
      <FeaturedProducts images={images} />
    </div>
  );
};

export default HomePage;
