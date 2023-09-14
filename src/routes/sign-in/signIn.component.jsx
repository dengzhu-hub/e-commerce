import "./signIn.style.scss";
import SignUp from "../sign-up/signUp.component";
import {
  signInWithGooglePop,
  signWithFaacePop,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const Sign = () => {
  const loginGoogleUserWithPopUp = async () => {
    const { user } = await signInWithGooglePop();
    // console.log(user);
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };
  const loginWithFacePopUp = async () => {
    const { user } = await signWithFaacePop();
    console.log(user);
  };
  //   const loginWithRedirect = async () => {
  //     const { user } = await signInWithGoogleRedirect();
  //     console.log(user);
  //   };
  return (
    <div>
      <h1>sign in</h1>
      <button className="btn-sign__In" onClick={loginGoogleUserWithPopUp}>
        sign In
      </button>
      <button className="btn-sign__In" onClick={signInWithGoogleRedirect}>
        sign In Redirect
      </button>
      <button className="btn-sign__In" onClick={signWithFaacePop}>
        sign In FaceBook
      </button>
      <SignUp />
    </div>
  );
};

export default Sign;
