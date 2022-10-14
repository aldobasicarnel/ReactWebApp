import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import ShopPage from "./Components/ShopPage/ShopPage";
import NavBar from "./Components/HomePage/NavBar/NavBar";
import Footer from "./Components/HomePage/Footer/Footer";
import { Route } from "react-router-dom";

import AboutPage from "./Components/AboutPage/AboutPage";
import Contact from "./Components/ContactPage/Contact";
import CheckoutPage from "./Components/CheckoutPage/CheckoutPage";

function App() {
  return (
    <div className="app">
      <NavBar />
      <main>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/shop">
          <ShopPage />
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
