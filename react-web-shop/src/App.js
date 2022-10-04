import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import ShopPage from "./Components/ShopPage/ShopPage";
import NavBar from "./Components/HomePage/NavBar/NavBar";
import { Route } from "react-router-dom";

import WallClock from "./Components/HomePage/Slider/images/wall-clock.jpeg";
import LaptopBag from "./Components/HomePage/Slider/images/laptop-bag.jpeg";
import Lamp from "./Components/HomePage/Slider/images/lamp.png";

const images = [
  { id: 1, img: WallClock, title: "Wall clock", price: 250 },
  { id: 2, img: LaptopBag, title: "Laptop Bag", price: 150 },
  { id: 3, img: Lamp, title: "Lamp", price: 50 },
];

function App(props) {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <Route path="/" exact>
        <HomePage images={images} />
      </Route>
      <Route path="/shop">
        <ShopPage images={images} />
      </Route>
    </div>
  );
}

export default App;
