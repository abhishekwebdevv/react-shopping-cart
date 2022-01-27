export const GET_PRODUCTS = 'GET_PRODUCTS' as const;
export const SET_LOADING = 'SET_LOADING' as const;
export const PRODUCTS_ERROR = 'PRODUCTS_ERROR' as const;

export type ProductT = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  amount: number;
};

export interface SetLoading {
  type: typeof SET_LOADING;
}

export interface ProductsError {
  type: typeof PRODUCTS_ERROR;
}

export interface GetProducts {
  type: typeof GET_PRODUCTS;
  payload: ProductT[];
}

export type ProductDispatchTypes = SetLoading | ProductsError | GetProducts;
