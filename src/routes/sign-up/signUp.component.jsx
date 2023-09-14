import { useState } from "react";
import FormItemInput from "antd/es/form/FormItemInput";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FromInput from "../form-input/formInput.component";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  console.log(formFields);
  console.log({ ...formFields });

  const { displayName, email, password, confirmPassword } = formFields;
  const resetFormField = () => {
    setFormFields(defaultFormField);
  };
  const onHandleSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("password are not correct.");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      /**
       * clear form input
       */
      resetFormField();

      createUserDocumentFromAuth(user, { displayName });
      console.log(user);
    } catch (err) {
      if (err.code === "auth/weak-password") {
        alert("password are too short.");
      } else if (err.code === "auth/email-already-in-use") {
        alert("email is already in use");
      } else {
        console.log(err);
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
    <div>
      <h1>Sign up with your Email.</h1>
      <form action="" onSubmit={onHandleSubmit}>
        <FromInput
          label="displayName"
          id="name"
          name="displayName"
          type="text"
          onChange={onHandleChanged}
          required
          value={displayName}
        />

        <FromInput
        label="email"
          id="email"
          type="email"
          name="email"
          onChange={onHandleChanged}
          required
          value={email}
        />

        <FromInput
        label="password"
          id="password"
          type="password"
          name="password"
          onChange={onHandleChanged}
          required
          value={password}
        />

        <FromInput
          id="confirmPassword"
          label="confirmPassword"
          name="confirmPassword"
          type="password"
          onChange={onHandleChanged}
          required
          value={confirmPassword}
        />
        <button type="submit"> Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
