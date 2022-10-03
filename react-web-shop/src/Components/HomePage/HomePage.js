import Slider from "./Slider/Slider";
import WelcomeBar from "./WelcomeBar/WelcomeBar";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import WallClock from "./Slider/images/wall-clock.jpeg";
import LaptopBag from "./Slider/images/laptop-bag.jpeg";
import Lamp from "./Slider/images/lamp.png";

const images = [
  { id: 1, img: WallClock, title: "Wall clock", price: 250 },
  { id: 2, img: LaptopBag, title: "Laptop Bag", price: 150 },
  { id: 3, img: Lamp, title: "Lamp", price: 50 },
];

const HomePage = () => {
  return (
    <>
      <Slider images={images} />
      <WelcomeBar />
      <FeaturedProducts images={images} />
    </>
  );
};

export default HomePage;
