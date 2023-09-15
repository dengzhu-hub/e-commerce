import { useState } from "react";
import "./signIn.style.scss";
import Button from "../button/button.component";
import FormInput from "../form-input/formInput.component";
import {
  signInWithGooglePop,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
const defaultFormField = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  console.log(formFields);
  console.log({ ...formFields });

  const { email, password } = formFields;
  const resetFormField = () => {
    setFormFields(defaultFormField);
  };

  /**
   * Sign with Google
   */
  const signWithGoogle = async () => {
    const { user } = await signInWithGooglePop();
    // console.log(user);
    await createUserDocumentFromAuth(user);
  };
  const onHandleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      /**
       * clear form input
       */
      resetFormField();
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("👤.user not found, please try again, \u{1F920} ");
          break;
        case "auth/wrong-password":
          alert("🔑.password is incorrect, please try again");
          break;
        default:
          console.log(error);
      }
    }
  };

  const onHandleChanged = e => {
    console.log(e.target);
    const { name, value } = e.target;
    console.log(name, value);
    setFormFields({ ...formFields, [name]: value });
    console.log({ [name]: value });
  };

  return (
    <div className="signIn-container">
      <h2 className="signIn-title">Already have an your account</h2>
      <span>Sign In with your Email and password.</span>
      <form action="" onSubmit={onHandleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit"> Sign In</Button>

          <Button type="button" buttonType="google" onClick={signWithGoogle}>
            <img
              className="sign-in__icon"
              alt="icon"
              src="https://ui-cdn.digitalocean.com/registration-next/399776b27f10a89571b17850f82383af2841fa66/static/media/oauth-logo-google.420169f299402ff6bd627eeff16bad0d.svg"
            />
            <span className="button-title">Sign In With Google</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
