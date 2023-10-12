import { USER_ACTION_TYPE } from "./user.type";
export const initialValue = {
  currentUser: null,
};

export const userReducer = (state = initialValue, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPE.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    case "increment":
      return {
        currentUser: state.currentUser + 1,
      };
    default:
      return state;
  }
};
