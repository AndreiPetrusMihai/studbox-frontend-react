import React from 'react';
import './sign-in-and-sign-up.styles.scss';
import SignUp from "../sign-up/sign-up.component";
import SignIn from "../sign-in/sign-in.component";

const SignInAndSignUp = () =>{
    return(
        <div className="signInAndUp">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignInAndSignUp;