import ShopTitle from "../ShopTitle/ShopTItle";
import Checkout from "./Checkout/Checkout";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import "./CheckoutPage.css";
import { Route } from "react-router-dom";

const CheckoutPage = () => {
  return (
    <>
      <ShopTitle title={`Checkout`} />
      <div className="checkout-page">
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/checkout/form">
          <CheckoutForm />
        </Route>
      </div>
    </>
  );
};

export default CheckoutPage;
