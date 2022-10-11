import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import ShopPage from "./Components/ShopPage/ShopPage";
import NavBar from "./Components/HomePage/NavBar/NavBar";
import Footer from "./Components/HomePage/Footer/Footer";
import { Route } from "react-router-dom";

import AboutPage from "./Components/AboutPage/AboutPage";
import Contact from "./Components/ContactPage/Contact";
import CheckoutPage from "./Components/CheckoutPage/CheckoutPage";

import WallClock from "./Components/HomePage/Slider/images/wall-clock.jpeg";
import LaptopBag from "./Components/HomePage/Slider/images/laptop-bag.jpeg";
import Lamp from "./Components/HomePage/Slider/images/lamp.png";

const images = [
  { id: 1, img: WallClock, title: "Wall clock", price: 250 },
  { id: 2, img: LaptopBag, title: "Laptop Bag", price: 150 },
  { id: 3, img: Lamp, title: "Lamp", price: 50 },
];

function App() {
  return (
    <div className="app">
      <NavBar />
      <main>
        <Route path="/" exact>
          <HomePage images={images} />
        </Route>
        <Route path="/shop">
          <ShopPage images={images} />
        </Route>
        <Route path="/about-us">
          <AboutPage />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/checkout">
          <CheckoutPage />
        </Route>
      </main>
      <div className="footer-wrap">
        <Footer />
      </div>
    </div>
  );
}

export default App;
