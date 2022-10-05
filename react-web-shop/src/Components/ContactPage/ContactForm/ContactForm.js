import { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [isValid, setIsValid] = useState(true);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const messageInputChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (
      enteredName.trim() === "" &&
      enteredEmail.trim() === "" &&
      enteredMessage.trim() === ""
    ) {
      setIsValid(false);
      return;
    }

    setIsValid(true);

    console.log(enteredName);
    console.log(enteredEmail);
    console.log(enteredMessage);

    setEnteredName("");
    setEnteredEmail("");
    setEnteredMessage("");
  };

  const InputClasses = isValid ? "form-control" : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={InputClasses}>
        <label>Name</label>
        <input
          type="text"
          id="name"
          valiue={enteredName}
          onChange={nameInputChangeHandler}
        />
        {!isValid && <p>Name must be not empty</p>}
      </div>
      <div className={InputClasses}>
        <label>E-Mail</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailInputChangeHandler}
        />
        {!isValid && <p>Email must be not empty</p>}
      </div>
      <div className={InputClasses}>
        <label>Message</label>
        <textarea
          value={enteredMessage}
          onChange={messageInputChangeHandler}
          id="message"
        />
        {!isValid && <p>Message must be not empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
