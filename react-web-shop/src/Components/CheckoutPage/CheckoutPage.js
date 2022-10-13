import ShopTitle from "../ShopTitle/ShopTItle";
import Checkout from "./Checkout/Checkout";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const items = useSelector((state) => state.items);

  return (
    <div>
      <ShopTitle title={`Checkout`} />
      {items.map((item) => (
        <Checkout
          item={{
            id: item.id,
            title: item.name,
            price: item.price,
            qunantity: item.quantity,
          }}
        />
      ))}
    </div>
  );
};

export default CheckoutPage;
