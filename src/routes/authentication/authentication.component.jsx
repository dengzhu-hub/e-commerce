import "./authentication.style.scss";
import SignInForm from "../../components/sign-in/signIn.component";
import SignUpForm from "../../components/sign-up/signUp.component";
const Authentication = () => {
  // const loginWithFacePopUp = async () => {
  //   const { user } = await signWithFaacePop();
  //   console.log(user);
  // };
  //   const loginWithRedirect = async () => {
  //     const { user } = await signInWithGoogleRedirect();
  //     console.log(user);
  //   };
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
