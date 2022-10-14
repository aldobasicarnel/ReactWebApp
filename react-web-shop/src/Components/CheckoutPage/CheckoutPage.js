import ShopTitle from "../ShopTitle/ShopTItle";
import Checkout from "./Checkout/Checkout";

const CheckoutPage = () => {
  return (
    <div>
      <ShopTitle title={`Checkout`} />
      <Checkout />
    </div>
  );
};

export default CheckoutPage;
