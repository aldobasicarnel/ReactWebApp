import FeaturedProducts from "../HomePage/FeaturedProducts/FeaturedProducts";
import ShopTitle from "../ShopTitle/ShopTItle";
import "./ShopPage.css";
import Sorting from "./SortingElements/Sorting";

const ShopPage = ({ images }) => {
  return (
    <div>
      <ShopTitle title={`Shop`} />
      <Sorting />

      <FeaturedProducts images={images} />
    </div>
  );
};

export default ShopPage;
