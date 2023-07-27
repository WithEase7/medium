import React, { useEffect } from "react";
import { googleLogo, facebookLogo, appleLogo, twitterLogo, emailLogo } from "../utilities/SvgIcons";
import '../css/SignIn.css'

const SignUp = () => {
  useEffect(() => {
    document.getElementById("navbar").style.display = "none";

    return () => {
      document.getElementById("navbar").style.display = "flex";
    };
  }, []);

  const SignInButton = ({logo, name})=> {
    return (
        <div className="signinButton">
            <div className="signInLogo">{logo}</div>
            <p>Sign in with {name}</p>
        </div>
    )
  }
  return (
    <div className="signinParent">
      <div className="signinContainer">
        <p className="signinTitle">Welcome back.</p>
        <div className="signinButtonContainer">
            <SignInButton logo={googleLogo} name="google"/>
            <SignInButton logo={facebookLogo} name="facebook"/>
            <SignInButton logo={appleLogo} name="apple"/>
            <SignInButton logo={twitterLogo} name="twitter"/>
            <SignInButton logo={emailLogo} name="email"/>
        </div>
        <p className="noAccount">No account? <span>Create one</span></p>
        <p className="miniText forgotEmail">Forgot email or trouble signing in? <span>Get help</span></p>
        <p className="miniText terms">Click "Sign In" to agree to Medium's <span>Terms of Service </span>and acknowldement that Medium's <span>Privacy Policy </span>applies to you.</p>
      </div>
    </div>
  );
};

export default SignUp;
