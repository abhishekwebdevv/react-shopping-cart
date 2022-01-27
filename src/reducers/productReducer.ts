import {
  GET_PRODUCTS,
  SET_LOADING,
  PRODUCTS_ERROR,
  ProductT,
  ProductDispatchTypes,
} from '../actions/productTypes';
// import { productStateI, productActionT } from '../types.d';

export interface initialStateI {
  loading: boolean;
  data: ProductT[];
}

const initialState: initialStateI = {
  data: [],
  loading: false,
};

const productReducer = (
  state: initialStateI = initialState,
  action: ProductDispatchTypes
): initialStateI => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default productReducer;
