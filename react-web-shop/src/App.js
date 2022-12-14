import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import ShopPage from "./Components/ShopPage/ShopPage";
import NavBar from "./Components/HomePage/NavBar/NavBar";
import Footer from "./Components/HomePage/Footer/Footer";
import ProductDetail from "./Components/ProductDetailPage/ProductDetail";
import { Route } from "react-router-dom";

import { useState, useEffect } from "react";

import AboutPage from "./Components/AboutPage/AboutPage";
import Contact from "./Components/ContactPage/Contact";
import CheckoutPage from "./Components/CheckoutPage/CheckoutPage";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setProducts(data.products);
      });
  }, []);

  if (isLoading) {
    return <p className="title">Loading...</p>;
  }

  return (
    <div className="app">
      <NavBar />
      <main>
        <Route path="/" exact>
          <HomePage products={products} />
        </Route>
        <Route path="/shop">
          <ShopPage products={products} />
        </Route>
        <Route path="/products/:productId">
          <ProductDetail products={products} />
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
