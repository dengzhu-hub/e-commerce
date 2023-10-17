import { useState } from 'react';
import { SignUpContainer, SubTitle, SignUpTitle } from './signUp.style';
import { useDispatch } from 'react-redux';
import { signUpStart } from '../../store/user/user.action';
import Button from '../../components/button/button.component';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/formInput.component';

const defaultFormField = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormField);
  // const val = useContext(UserContext);
  console.log('hit');

  // console.log(formFields);
  // console.log({ ...formFields });

  const { displayName, email, password, confirmPassword } = formFields;
  // const { setCurrentUser } = useContext(UserContext);
  const resetFormField = () => {
    setFormFields(defaultFormField);
  };
  const onHandleSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('password are not match.');
      return;
    }
    try {
      dispatch(signUpStart(email, password, displayName));

      console.log('sign up successful');

      // setCurrentUser(user);
      // console.log(user);
      /**
       * clear form input
       */
      resetFormField();
    } catch (err) {
      if (err.code === 'auth/weak-password') {
        alert('password are too short.');
      } else if (err.code === 'auth/email-already-in-use') {
        alert('email is already in use');
      } else {
        console.log(err);
      }
    }
  };
  const onHandleChanged = e => {
    // console.log(e.target);
    const { name, value } = e.target;
    // console.log(name, value);
    setFormFields({ ...formFields, [name]: value });
    // console.log({ [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>Create your account</SignUpTitle>
      <SubTitle>Sign up with your Email.</SubTitle>
      <form action="" onSubmit={onHandleSubmit}>
        <FormInput
          label="displayName"
          id="name"
          name="displayName"
          type="text"
          onChange={onHandleChanged}
          required
          value={displayName}
        />

        <FormInput
          label="email"
          id="email"
          type="email"
          name="email"
          onChange={onHandleChanged}
          required
          value={email}
        />

        <FormInput
          label="password"
          id="password"
          type="password"
          name="password"
          onChange={onHandleChanged}
          required
          value={password}
        />

        <FormInput
          id="confirmPassword"
          label="confirmPassword"
          name="confirmPassword"
          type="password"
          onChange={onHandleChanged}
          required
          value={confirmPassword}
        />
        <Button type="submit"> Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
