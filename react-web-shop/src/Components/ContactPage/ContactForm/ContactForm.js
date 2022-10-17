import useInput from "../../CheckoutPage/Hooks/use-input";
import "./ContactForm.css";

const ContactForm = () => {
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailHasError,
    valueChangeHandler: enteredEmailChangeHandler,
    inputBlurHandler: enteredEmailBlurHandler,
    reset: enteredEmailReset,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: enteredMessageHasError,
    valueChangeHandler: enteredMessageChangeHandler,
    inputBlurHandler: enteredMessageBlurHandler,
    reset: enteredMessageReset,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (nameIsValid && enteredEmailIsValid && enteredMessageIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (nameHasError) {
      return;
    }

    console.log(name);
    console.log(enteredEmail);
    console.log(enteredMessage);

    nameReset();
    enteredEmailReset();
    enteredMessageReset();
  };

  const nameInputClasses = nameHasError ? "f-in invalid" : "f-in ";

  const emailInputClasses = enteredEmailHasError ? "f-in invalid" : "f-in ";

  const messageInputClasses = enteredMessageHasError ? "f-in invalid" : "f-in ";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label>Name</label>
        <input
          type="text"
          id="name"
          value={name}
          className={nameInputClasses}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameHasError && <p className="error-text">Name must be not empty</p>}
      </div>
      <div className="form-control">
        <label>E-Mail</label>
        <input
          type="email"
          id="email"
          className={emailInputClasses}
          value={enteredEmail}
          onChange={enteredEmailChangeHandler}
          onBlur={enteredEmailBlurHandler}
        />
        {enteredEmailHasError && (
          <p className="error-text">Email& must have '@'</p>
        )}
      </div>
      <div className="form-control">
        <label>Message</label>
        <textarea
          value={enteredMessage}
          className={messageInputClasses}
          onChange={enteredMessageChangeHandler}
          onBlur={enteredMessageBlurHandler}
          id="message"
        />
        {enteredMessageHasError && (
          <p className="error-text">Message must be not empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
