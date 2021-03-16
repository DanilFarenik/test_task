import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT, ALL_PRODUCT } from "../utils";
import { iAction, iProduct } from "../utils/type";

export const allProducts = (body: iProduct[]): iAction => {
  return {
    type: ALL_PRODUCT,
    body: body
  }
}

export const addProduct = (body: iProduct): iAction => {
  return {
    type: ADD_PRODUCT,
    body: body
  }
}

export const deleteProduct = (body: iProduct): iAction => {
  return {
    type: DELETE_PRODUCT,
    body: body
  }
}

export const updateProduct = (body: iProduct): iAction => {
  return {
    type: UPDATE_PRODUCT,
    body: body
  }
}