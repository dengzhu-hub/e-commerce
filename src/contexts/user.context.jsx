import { createContext, useEffect, useReducer } from "react";
import { createAction } from "../utils/reducer/createAction";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";
// as the actual value  you want  to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPE = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
  increment: "increment",
};
const userReducer = (state, action) => {
  console.log("dispatched");
  console.log(action);
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
      throw new Error("Invalid action type");
  }
};
const initialValue = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, initialValue);
  console.log(currentUser);
  const setCurrentUser = user => {
    dispatch(createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user));
  };  
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(user => {
      if (user) createUserDocumentFromAuth(user);
      console.log(user);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
//TODO:

/**
 * userReducer function
 */
