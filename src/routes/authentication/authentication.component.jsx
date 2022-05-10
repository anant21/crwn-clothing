import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./authentication.styles.scss";

// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
// import { signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";

const Authentication = () => {
  //   useEffect(async () => {
  //     const response = await getRedirectResult(auth);
  //     console.log(response);
  //   }, []);

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />

      {/* <button onClick={logGoogleRedirectUser}>
        Sign in with Redirect
      </button> */}
    </div>
  );
};

export default Authentication;
