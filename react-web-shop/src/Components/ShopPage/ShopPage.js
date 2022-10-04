import FeaturedProducts from "../HomePage/FeaturedProducts/FeaturedProducts";
import Footer from "../HomePage/Footer/Footer";
import "./ShopPage.css";
import Sorting from "./SortingElements/Sorting";

const ShopPage = ({ images }) => {
  return (
    <>
      <div className="shop-title">
        <h1>Home/Shop</h1>
      </div>
      <Sorting />
      <div className="products">
        <FeaturedProducts images={images} />
      </div>
    </>
  );
};

export default ShopPage;
