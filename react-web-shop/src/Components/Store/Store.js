import { createStore } from "redux";

const cart = [];

const productsReducer = (state = { cart }, action) => {};

const store = createStore(productsReducer);

const productsSubscriber = () => {
  store.getState();
};

store.subscribe(productsSubscriber);

export default store;
