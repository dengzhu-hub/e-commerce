import { useState } from 'react';
import Button, { BUTTON_TYPE_CLASS } from '../button/button.component';
import FormInput from '../form-input/formInput.component';
import { useDispatch } from 'react-redux';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../store/user/user.action';
import {
  SignInContainer,
  SignInTitle,
  SubTitle,
  ButtonContainer,
} from './signIn.style';
import { signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
const defaultFormField = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormField);
  // const { setCurrentUser } = useContext(UserContext);
  // console.log(formFields);
  // console.log({ ...formFields });

  const { email, password } = formFields;
  const resetFormField = () => {
    setFormFields(defaultFormField);
  };

  /**
   * Sign with Google
   */
  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  /**
   * submit method
   * @param {e} 当前点击的对象
   * @return {undefined}
   * @author jackdeng
   */
  const onHandleSubmit = async e => {
    e.preventDefault();
    try {
      dispatch(emailSignInStart(email, password));

      /**
       * clear form input
       */
      resetFormField();
    } catch (error) {
      switch (error.code) {
        case 'auth/user-not-found':
          alert('👤.user not found, please try again, \u{1F920} ');
          break;
        case 'auth/wrong-password':
          alert('🔑.password is incorrect, please try again');
          break;
        default:
          console.log(error);
      }
    }
  };

  /**
   * 当输入框里的内容改变时，触发
   * @param {e} 当前操作的对象
   * @return {html} dom object
   */
  const onHandleChanged = e => {
    // console.log(e.target);
    const { name, value } = e.target;
    // console.log(name, value);
    setFormFields({ ...formFields, [name]: value });
    // console.log({ [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>Already have an your account</SignInTitle>
      <SubTitle>Sign In with your Email and password.</SubTitle>
      <form action="" onSubmit={onHandleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          onChange={onHandleChanged}
          required
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          onChange={onHandleChanged}
          required
          value={password}
        />
        <ButtonContainer>
          <Button type="submit"> Sign In</Button>

          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASS.google}
            onClick={signInWithGoogle}
          >
            <img
              className="sign-in__icon"
              alt="icon"
              src="https://ui-cdn.digitalocean.com/registration-next/399776b27f10a89571b17850f82383af2841fa66/static/media/oauth-logo-google.420169f299402ff6bd627eeff16bad0d.svg"
            />
            <span className="button-title">Sign In With Google</span>
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
