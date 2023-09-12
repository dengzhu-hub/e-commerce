import {
  signInWithGooglePop,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

const Sign = () => {
  const loginGoogleUser = async () => {
    const {user} = await signInWithGooglePop();
    // console.log(user);
    createUserDocumentFromAuth(user)
  };
  return (
    <div>
      <h1>sign in</h1>
      <button onClick={loginGoogleUser}>sign with google user</button>
    </div>
  );
};

export default Sign;
