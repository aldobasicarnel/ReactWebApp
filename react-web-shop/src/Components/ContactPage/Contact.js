import ShopTitle from "../ShopTitle/ShopTItle";
import ContactForm from "./ContactForm/ContactForm";
import "./Contact.css";
const ContactPage = () => {
  return (
    <div className="f-cont">
      <ShopTitle title={`Contact`} />
      <div>
        <h3 className="form-title">Contact Us</h3>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
