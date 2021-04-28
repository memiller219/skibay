import ProductActionTypes from "./products.types";

const INITIAL_STATE = {
  products: [],
};

export const productListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case ProductActionTypes.PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case ProductActionTypes.PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
