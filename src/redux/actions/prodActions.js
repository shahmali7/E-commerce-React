import { ActionTypes } from "../contains/actionTypes"

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: { products },
  };
};

export const addBasketItem = (product) => {
  return {
    type: ActionTypes.ADD_BASKET_ITEM,
    payload: { product },
  };
};
export const removeBasketItem = (id) => {
  return {
    type: ActionTypes.REMOVE_BASKET_ITEM,
    payload: { id },
  };
};
