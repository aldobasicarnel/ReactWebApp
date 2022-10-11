import { createStore } from "redux";
const cartState = {
  items: [],
  totalAmount: 0,
};

const productsReducer = (state = { cartState }, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmounts =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.item.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
  }
};

const store = createStore(productsReducer);

const productsSubscriber = () => {
  store.getState();
};

store.subscribe(productsSubscriber);

export default store;
