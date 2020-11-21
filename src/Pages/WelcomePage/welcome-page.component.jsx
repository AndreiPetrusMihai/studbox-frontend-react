import React from "react";
import SignInAndSignUp from "../../Components/sign-in-and-sign-up/sign-in-and-sign-up.component";
import './welcome-page.styles.scss'
import './coolFunction.js';



const WelcomePage = () =>{
    return(
        <div className="welcomePageContainer">
            <div className="svg-container">
                <svg viewBox="0 0 800 400" className="svg">
                    <path id="curve" fill="#E85A4F" d="M 800 300 Q 400 350 0 300 L 0 0 L 800 0 L 800 300 Z">
                    </path>
                </svg>
            </div>

            <header>
                <h1>Welcome to stud-box!</h1>
                <h3>Here you are, scroll down to join us.</h3>
            </header>
            <main>
                <SignInAndSignUp/>
            </main>
            <footer>
                <p>Footer?</p>
                <small>Add content here</small>
            </footer>
        </div>

    )
}
export default WelcomePage;



