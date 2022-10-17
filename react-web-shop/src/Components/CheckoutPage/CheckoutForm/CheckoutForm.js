import "./CheckoutForm.css";
import useInput from "../Hooks/use-input";

import Tag from "../Tag";

const CheckoutForm = () => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    inputBlurHandler: nameInputBlurHandler,
    valueChangeHandler: nameChangeHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    hasError: lastNameInputHasError,
    isValid: enteredLastNameIsValid,
    inputBlurHandler: lastNameBlurHandler,
    valueChangeHandler: lastNameChangeHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: enteredEmailHasError,
    isValid: enteredEmailIsValid,
    inputBlurHandler: enteredEmailBlurHandler,
    valueChangeHandler: enteredEmailChangeHandler,
    reset: resetEnteredEmail,
  } = useInput((value) => value.includes("@"));

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+"];
  const {
    value: enteredNumber,
    hasError: enteredNumberHasError,
    isValid: enteredNumberIsValid,
    inputBlurHandler: enteredNumberBlurHandler,
    valueChangeHandler: enteredNumberChangeHandler,
    reset: resetNumber,
  } = useInput((value) => value.includes(numbers));

  const {
    value: streetAdress,
    hasError: streetAdressHasError,
    isValid: streetAdressIsValid,
    inputBlurHandler: streetAdressBlurHandler,
    valueChangeHandler: streetAdressChangeHandler,
    reset: resetStreetAdress,
  } = useInput((value) => value.trim() !== "");

  const {
    value: adress,
    hasError: adressHasError,
    isValid: adressIsValid,
    inputBlurHandler: adressBlurHandler,
    valueChangeHandler: adressChangeHandler,
    reset: resetAdress,
  } = useInput((value) => value.trim() !== "");
  const {
    value: city,
    hasError: cityHasError,
    isValid: cityIsValid,
    inputBlurHandler: cityBlurHandler,
    valueChangeHandler: cityChangeHandler,
    reset: resetCity,
  } = useInput((value) => value.trim() !== "");

  const {
    value: state,
    hasError: stateHasError,
    isValid: stateIsValid,
    inputBlurHandler: stateBlurHandler,
    valueChangeHandler: stateChangeHandler,
    reset: resetState,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredZipCode,
    hasError: enteredZipCodeHasError,
    isValid: zipCodeIsValid,
    inputBlurHandler: enteredZipCodeBlurHandler,
    valueChangeHandler: enteredZipCodeChangeHandler,
    reset: resetZipCode,
  } = useInput((value) => value.includes(numbers));

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid &&
    enteredNumberIsValid &&
    streetAdressIsValid &&
    adressIsValid &&
    cityIsValid &&
    zipCodeIsValid &&
    stateIsValid
  ) {
    formIsValid = true;
  }

  const formSubmisionHandler = (event) => {
    event.preventDefault();

    if (nameInputHasError) {
      return;
    } else {
      console.log(enteredName);
    }

    resetNameInput();
    resetLastNameInput();
    resetEnteredEmail();
    resetNumber();
    resetStreetAdress();
    resetAdress();
    resetZipCode();
    resetCity();
    resetState();
  };

  const nameInputClasses = nameInputHasError ? "in invalid" : "in";
  const lastNameInputClasses = lastNameInputHasError ? "in invalid" : "in";
  const emailInputClasses = enteredEmailHasError ? "in invalid" : "in";
  const numberInputClasses = enteredNumberHasError ? "in invalid" : "in";
  const sAInputClasses = streetAdressHasError ? "in invalid" : "in";
  const adressInputClasses = adressHasError ? "in invalid" : "in";
  const zipCodeInputClasses = enteredZipCodeHasError ? "in invalid" : "in";
  const cityInputClasses = cityHasError ? "in invalid" : "in";
  const stateInputClasses = stateHasError ? "in invalid" : "in";

  return (
    <div className="f-container">
      <Tag tag={`2`} />
      <h1 className="f-title">Checkout Info</h1>
      <form onSubmit={formSubmisionHandler} className="f">
        <div className="left-f-control">
          <div className="form-inputs-container">
            <div className="form-inputs">
              <label>First name</label>
              <input
                value={enteredName}
                onChange={nameChangeHandler}
                onBlur={nameInputBlurHandler}
                type="text"
                className={nameInputClasses}
              />
              {nameInputHasError && (
                <p className="error-text">*Required field*</p>
              )}
            </div>
            <div className="form-inputs">
              <label>Last name</label>
              <input
                value={enteredLastName}
                onChange={lastNameChangeHandler}
                onBlur={lastNameBlurHandler}
                type="text"
                className={lastNameInputClasses}
              />
              {lastNameInputHasError && (
                <p className="error-text">*Required field*</p>
              )}
            </div>
            <div className="form-inputs">
              <label>Phone</label>
              <input
                value={enteredNumber}
                onChange={enteredNumberChangeHandler}
                onBlur={enteredNumberBlurHandler}
                type="number"
                className={numberInputClasses}
              />
              {enteredNumberHasError && (
                <p className="error-text">Must have '+' *Required field*</p>
              )}
            </div>
            <div className="form-inputs">
              <label>Email Adress</label>
              <input
                value={enteredEmail}
                onChange={enteredEmailChangeHandler}
                onBlur={enteredEmailBlurHandler}
                type="email"
                className={emailInputClasses}
              />
              {enteredEmailHasError && (
                <p className="error-text">
                  Email must have "@", *Required field*
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="right-f-control">
          <div className="form-inputs-container">
            <div className="form-inputs">
              <label>Street Adress</label>
              <input
                value={streetAdress}
                onChange={streetAdressChangeHandler}
                onBlur={streetAdressBlurHandler}
                type="text"
                className={sAInputClasses}
              />
              {streetAdressHasError && (
                <p className="error-text">*Required field*</p>
              )}
            </div>
            <div className="form-inputs">
              <label>Apt, suite, etc(optional)</label>
              <input
                type="text"
                value={adress}
                onChange={adressChangeHandler}
                onBlur={adressBlurHandler}
                className={adressInputClasses}
              />
              {adressHasError && <p className="error-text">*Required field*</p>}
            </div>
            <div className="form-inputs">
              <label>City</label>
              <input
                value={city}
                onChange={cityChangeHandler}
                onBlur={cityBlurHandler}
                type="text"
                className={cityInputClasses}
              />
              {cityHasError && <p className="error-text">*Required field*</p>}
            </div>
            <div className="form-inputs">
              <div className="form-two">
                <div className="form-flex">
                  <label>State</label>
                  <input
                    value={state}
                    onChange={stateChangeHandler}
                    onBlur={stateBlurHandler}
                    type="text"
                    className={stateInputClasses}
                  />
                  {stateHasError && (
                    <p className="error-text">*Required field*</p>
                  )}
                </div>
                <div className="form-flex">
                  <label>Zip code</label>
                  <input
                    type="number"
                    value={enteredZipCode}
                    onChange={enteredZipCodeChangeHandler}
                    onBlur={enteredZipCodeBlurHandler}
                    className={zipCodeInputClasses}
                  />
                  {enteredZipCodeHasError && (
                    <p className="error-text">*Required field*</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="btn-control-container">
        <button className="btn-control" onClick={formSubmisionHandler}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default CheckoutForm;
