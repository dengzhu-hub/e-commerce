import "./signIn.style.scss";
import {
  signInWithGooglePop,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

const Sign = () => {
  const loginGoogleUser = async () => {
    const { user } = await signInWithGooglePop();
    // console.log(user);
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };
  return (
    <div>
      <h1>sign in</h1>
      <button className="btn-sign__In" onClick={loginGoogleUser}>
        sign In
      </button>
    </div>
  );
};

export default Sign;
