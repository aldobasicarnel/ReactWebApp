import ShopTitle from "../ShopTitle/ShopTItle";
import Checkout from "./Checkout/Checkout";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  return (
    <>
      <ShopTitle title={`Checkout`} />
      <div className="checkout-page">
        <Checkout />
        <CheckoutForm />
      </div>
    </>
  );
};

export default CheckoutPage;
