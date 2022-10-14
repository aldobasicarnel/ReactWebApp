import "./CheckoutForm.css";
import { useParams } from "react-router-dom";

import Tag from "../Tag";

const CheckoutForm = () => {
  return (
    <div className="f-container">
      <Tag tag={`2`} />
      <h1 className="f-title">Checkout Info</h1>
      <form className="f">
        <div className="left-f-control">
          <div className="form-inputs-container">
            <div className="form-inputs">
              <label>First name</label>
              <input type="text" className="in" />
            </div>
            <div className="form-inputs">
              <label>Last name</label>
              <input type="text" className="in" />
            </div>
            <div className="form-inputs">
              <label>Phone</label>
              <input type="number" className="in" />
            </div>
            <div className="form-inputs">
              <label>Email Adress</label>
              <input type="email" className="in" />
            </div>
          </div>
        </div>
        <div className="right-f-control">
          <div className="form-inputs-container">
            <div className="form-inputs">
              <label>Street Adress</label>
              <input type="text" className="in" />
            </div>
            <div className="form-inputs">
              <label>Apt, suite, etc(optional)</label>
              <input type="text" className="in" />
            </div>
            <div className="form-inputs">
              <label>City</label>
              <input type="text" className="in" />
            </div>
            <div className="form-inputs">
              <div className="form-two">
                <div className="form-flex">
                  <label>State</label>
                  <input type="text" className="in" />
                </div>
                <div className="form-flex">
                  <label>Zip code</label>
                  <input type="number" className="in" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="btn-control-container">
        <button className="btn-control"> Continue</button>
      </div>
    </div>
  );
};

export default CheckoutForm;
