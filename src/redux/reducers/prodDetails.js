import { ActionTypes } from "../contains/actionTypes";

export const initialState = {
  products: [],
  basketItems: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload.products };
    case ActionTypes.ADD_BASKET_ITEM:
      return {
        ...state,
        basketItems: [...state.basketItems, action.payload.product],
      };
    case ActionTypes.REMOVE_BASKET_ITEM:
      return {
        ...state,
        basketItems: state.basketItems.filter((product) => {
          return product.id !== action.payload.id;
        }),
      };
    
    default:
      return state;
  }
};
