/*

import React, { useRef } from "react";

const Input = (props) => {
  const amountOfRef = useRef();

  const itemInputHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountOfRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().lenght === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      return;
    }
    props.onInputCartHandler(enteredAmountNumber);
  };
  return (
    <div>
      <label htmlFor="amount" />
      <input ref={amountOfRef} onChange={itemInputHandler} {...props.input} />
    </div>
  );
};

export default Input;
*/
