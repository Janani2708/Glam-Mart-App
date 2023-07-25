import { ADD_CART, CLEAR_CART, REMOVE, REMOVE_ITEM } from "./type"

export const ADD = (id) => {
  return {
    type: ADD_CART,
    payload: id,
  }
}
export const DELETE = (id) => {
  return {
    type: REMOVE,
    payload: id,
  }
}
export const REMOVE_INT = (item) => {
  return {
    type: REMOVE_ITEM,
    payload: item,
  }
}
export const clearCart = (item) => {
  return {
    type: CLEAR_CART,
  };
};