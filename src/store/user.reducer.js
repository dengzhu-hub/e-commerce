const initialValue = {
  currentUser: null,
};
const USER_ACTION_TYPE = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
  increment: 'increment',
};

 export const userReducer = (state = initialValue, action) => {
  console.log('dispatched');
  console.log(action);
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPE.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    case 'increment':
      return {
        currentUser: state.currentUser + 1,
      };
    default:
      throw new Error('Invalid action type');
  }
};
