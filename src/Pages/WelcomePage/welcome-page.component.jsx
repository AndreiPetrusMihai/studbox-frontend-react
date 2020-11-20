import React from "react";

import SignInAndSignUp from "../../Components/sign-in-and-sign-up/sign-in-and-sign-up.component";
import './welcome-page.styles.scss'


const WelcomePage = () =>{
    return(
        <div className="main-page">
            <div className="main-welcome">
                <h1> WELCOME EVERYONE </h1>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ducimus ex explicabo facilis minima nobis possimus,
                quo recusandae soluta ut! Eius eligendi quo quos saepe voluptate. Atque nobis quo tempore!

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ducimus ex explicabo facilis minima nobis possimus,
                quo recusandae soluta ut! Eius eligendi quo quos saepe voluptate. Atque nobis quo tempore!

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ducimus ex explicabo facilis minima nobis possimus,
                quo recusandae soluta ut! Eius eligendi quo quos saepe voluptate. Atque nobis quo tempore!

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ducimus ex explicabo facilis minima nobis possimus,
                quo recusandae soluta ut! Eius eligendi quo quos saepe voluptate. Atque nobis quo tempore!
            </div>

            <SignInAndSignUp/>
        </div>
    )
}


export default WelcomePage;



