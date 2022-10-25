import FeaturedProducts from "../HomePage/FeaturedProducts/FeaturedProducts";
import ShopTitle from "../ShopTitle/ShopTItle";
import "./ShopPage.css";
import Sorting from "./SortingElements/Sorting";

const ShopPage = ({ products }) => {
  return (
    <div>
      <ShopTitle title={`Shop`} />
      <Sorting />
      <FeaturedProducts products={products} />
    </div>
  );
};

export default ShopPage;
