import OrderActionTypes from "./order.types";

const INITIAL_STATE = {
  orders: {},
};

export const orderCreateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OrderActionTypes.ORDER_CREATE_REQUEST:
      return { loading: true };
    case OrderActionTypes.ORDER_CREATE_SUCCESS:
      return { loading: false, success: true, order: action.payload };
    case OrderActionTypes.ORDER_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
