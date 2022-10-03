import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Slider from "./Components/Slider/Slider";
import WelcomeBar from "./Components/WelcomeBar/WelcomeBar";
import FeaturedProducts from "./Components/FeaturedProducts/FeaturedProducts";
import WallClock from "./Components/Slider/images/wall-clock.jpeg";
import LaptopBag from "./Components/Slider/images/laptop-bag.jpeg";
import Lamp from "./Components/Slider/images/lamp.png";

function App() {
  const images = [
    { id: 1, img: WallClock, title: "Wall clock", price: 250 },
    { id: 2, img: LaptopBag, title: "Laptop Bag", price: 150 },
    { id: 3, img: Lamp, title: "Lamp", price: 50 },
  ];

  return (
    <div>
      <NavBar />
      <Slider images={images} />
      <WelcomeBar />
      <FeaturedProducts images={images} />
    </div>
  );
}

export default App;
