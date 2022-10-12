import ShopTitle from "../ShopTitle/ShopTItle";
import Checkout from "./Checkout/Checkout";

const CheckoutPage = ({ images }) => {
  return (
    <div>
      <ShopTitle title={`Checkout`} />
      <Checkout images={images} />
    </div>
  );
};

export default CheckoutPage;
