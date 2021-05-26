// types
export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const DELETE_FROM_BASKET = "DELETE_FROM_BASKET";
export const UPDATE_BASKET__QUANTITY = "UPDATE_BASKET__QUANTITY";

//add item
const cartItemToAdd = (basket, cartItemToAdd) => {
  const existingItem = basket.find((item) => item.id === cartItemToAdd.id);
  if (existingItem) {
    return basket.map((item) =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...basket, { ...cartItemToAdd, quantity: 1 }];
};
//add item with quantity
const cartItemToAddQuantity = (basket, id, updateQuantity) => {
  return basket.map((item) =>
    item.id === id ? { ...item, quantity: updateQuantity } : item
  );
};

// get subtotal
export const getSubTotal = (basket) => {
  return basket.reduce(
    (accumulatedQuantity, item) =>
      accumulatedQuantity + item.quantity * item.price,
    0
  );
};

export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_BASKET: {
      return {
        ...state,
        basket: cartItemToAdd(state.basket, action.item),
      };
    }
    case DELETE_FROM_BASKET: {
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.payload.id),
      };
    }
    case UPDATE_BASKET__QUANTITY: {
      return {
        ...state,
        basket: cartItemToAddQuantity(
          state.basket,
          action.payload.id,
          action.payload.upadteQuantity
        ),
      };
    }
    default:
      return state;
  }
};

export default reducer;
