import UserActionTypes from "./user.types";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case UserActionTypes.USER_LOGIN_REQUEST:
      return { loading: true };
    case UserActionTypes.USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case UserActionTypes.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case UserActionTypes.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
