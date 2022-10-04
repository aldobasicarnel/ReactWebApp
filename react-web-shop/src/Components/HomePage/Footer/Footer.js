import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="customer-service">
        <span>Customer Service</span>
        <p>Help & Contact Us</p>
        <p>Online Stores</p>
        <p>Terms & Conditions</p>
      </div>
      <div className="customer-service">
        <span>Social Media</span>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>Twitter</p>
      </div>
      <div className="customer-service">
        <span>Profile</span>
        <p>My Account</p>
        <p>Checkout</p>
        <p>Order Tracking</p>
        <p>Help & Support</p>
      </div>
    </div>
  );
};

export default Footer;
