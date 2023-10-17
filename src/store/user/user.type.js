const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'user/SET_CURRENT_USER',
  CHECK_USER_SESSION: 'user/check-user-session',
  GOOGLE_SIGN_IN_START: 'user/google-sign-in-start',
  EMAIL_SIGN_IN_START: 'user/email-signing-start',
  SIGN_IN_SUCCESS: 'user/sign-in-success',
  SIGN_IN_FAILURE: 'user/sign-in-failure',
  SIGN_UP_START: 'user/sign-up-start',
  SIGN_UP_SUCCESS: 'user/sign-up-success',
  SIGN_UP_FAILURE: 'user/sign-up-failure',
  SIGN_OUT_START: 'user/sign-out-start',
  SIGN_OUT_SUCCESS: 'user/sign-out-success',
  SIGN_OUT_FAILURE: 'user/sign-out-failure',
};

export default USER_ACTION_TYPES;
