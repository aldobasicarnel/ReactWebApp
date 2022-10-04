import Slider from "./Slider/Slider";
import WelcomeBar from "./WelcomeBar/WelcomeBar";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import Footer from "./Footer/Footer";
import "./HomePage.css";

const HomePage = ({ images }) => {
  return (
    <div className="home">
      <Slider images={images} />
      <WelcomeBar />
      <h3>Featured Products</h3>
      <FeaturedProducts images={images} />
      <Footer />
    </div>
  );
};

export default HomePage;
