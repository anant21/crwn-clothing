// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import {
  signInWithGooglePopup,
  //   signInWithGoogleRedirect,
  createUserDocumentFromAuth,
  auth,
} from "../../utils/fireba/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const SignIn = () => {
  //   useEffect(async () => {
  //     const response = await getRedirectResult(auth);
  //     console.log(response);
  //   }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      {/* <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button> */}

      {/* <button onClick={logGoogleRedirectUser}>
        Sign in with Google Redirect
      </button> */}

      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default SignIn;
