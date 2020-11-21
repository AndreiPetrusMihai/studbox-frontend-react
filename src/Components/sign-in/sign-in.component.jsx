import React,{useState} from 'react';
import CustomButton from "../custom-button/custom-button.component";
import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import {auth} from "../../Firebase/firebase.utils";

const SignIn = () => {

	const [userCredentials,setCredentials] = useState({email:'',password:''})
	const {email,password} = userCredentials;

	const handleSubmit = async event =>{

		event.preventDefault();

		const { email, password } = userCredentials;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			setCredentials({ email: '', password: '' });
		} catch (error) {
			console.log(error);
		}
	}


	const handleChange = event =>{
		const {value,name} = event.target;
		setCredentials({...userCredentials, [name] : value });
	}

	return(
		<div className="signInContainer">
			<h1 className="signInTitle">I already have an account</h1>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name='email'
					type='email'
					handleChange={handleChange}
					value={email}
					label='Email'
					required
				/>
				<FormInput
					name='password'
					type='password'
					value={password}
					handleChange={handleChange}
					label='Password'
					required
				/>
				<div className="signInButtonsContainer">
					<CustomButton className="buttonStyles" type='submit' inverted={false}> SIGN IN </CustomButton>
				</div>
			</form>
		</div>
	)
}



export default SignIn;