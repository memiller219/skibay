import ProductActionTypes from "./products.types";
import axios from "axios";

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: ProductActionTypes.PRODUCT_LIST_REQUEST,
    });

    const { data } = await axios.get("/api/products");

    dispatch({
      type: ProductActionTypes.PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ProductActionTypes.PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
