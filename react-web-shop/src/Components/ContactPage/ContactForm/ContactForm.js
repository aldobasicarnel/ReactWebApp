import { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const messageInputChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
    if (
      enteredName.trim() === "" &&
      enteredEmail.trim() === "" &&
      enteredMessage.trim() === ""
    ) {
      setIsValid(false);
      return;
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setIsTouched(true);

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

  const inputIsInvalid = !isValid && isTouched;

  const InputClasses = inputIsInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={InputClasses}>
        <label>Name</label>
        <input
          type="text"
          id="name"
          valiue={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={inputBlurHandler}
        />
        {inputIsInvalid && <p className="error-text">Name must be not empty</p>}
      </div>
      <div className={InputClasses}>
        <label>E-Mail</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={inputBlurHandler}
        />
        {inputIsInvalid && (
          <p className="error-text">Email must be not empty</p>
        )}
      </div>
      <div className={InputClasses}>
        <label>Message</label>
        <textarea
          value={enteredMessage}
          onChange={messageInputChangeHandler}
          onBlur={inputBlurHandler}
          id="message"
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
