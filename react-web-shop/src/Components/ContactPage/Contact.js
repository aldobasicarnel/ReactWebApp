import ShopTitle from "../ShopTitle/ShopTItle";
import ContactForm from "./ContactForm/ContactForm";

const ContactPage = () => {
  return (
    <div>
      <ShopTitle title={`Contact`} />
      <div>
        <h3>Contact</h3>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
