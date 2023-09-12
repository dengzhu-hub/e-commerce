import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import "./signIn.style.scss";
import {
  auth,
  signInWithGooglePop,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase.utils";

const Sign = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getRedirectResult(auth);
        console.log(res);
      } catch (error) {
        console.error("Error fetching redirect result:", error);
      }
    };

    fetchData(); // 调用异步函数
  }, []);
  const loginGoogleUserWithPopUp = async () => {
    const { user } = await signInWithGooglePop();
    // console.log(user);
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
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
    </div>
  );
};

export default Sign;
