import "./CheckoutForm.css";

import Tag from "../Tag";
const CheckoutForm = () => {
  return (
    <div className="f-container">
      <Tag tag={`2`} />
      <form className="f">
        <div className="left-f-control">
          <label>Frist name</label>
          <input type="text" />
        </div>
        <div className="left-f-control">
          <label>Last name</label>
          <input type="text" />
        </div>
        <div className="left-f-contol">
          <label>Phone</label>
          <input type="number" />
        </div>
        <div className="left-f-control">
          <label>Email Adress</label>
          <input type="email" />
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
