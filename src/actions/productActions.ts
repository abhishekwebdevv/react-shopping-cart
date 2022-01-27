import {
  GET_PRODUCTS,
  SET_LOADING,
  PRODUCTS_ERROR,
  ProductDispatchTypes,
} from './productTypes';
import { Dispatch } from 'redux';

// Get Products
export const getProducts =
  () => async (dispatch: Dispatch<ProductDispatchTypes>) => {
    try {
      dispatch({
        type: SET_LOADING,
      });

      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();

      dispatch({
        type: GET_PRODUCTS,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: PRODUCTS_ERROR,
      });
    }
  };
