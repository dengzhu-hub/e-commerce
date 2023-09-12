import { useState } from "react";
const defaultFormField = {
  desplayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;

  return (
    <div>
      <h1>Sign up with your Email.</h1>
      <form action="">
        <label htmlFor="name">display name</label>
        <input id="name" type="text" required />
        <label htmlFor="name">Email</label>
        <input id="name" type="text" required />
        <label htmlFor="name">Passsword</label>
        <input id="name" type="text" required />
        <label htmlFor="name"> </label>
        <input id="name" type="text" required />
        <button> Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
