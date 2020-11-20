import React,{useState} from 'react';
import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.styles.scss';
import {auth} from "../../Firebase/firebase.utils";
import {createUserProfileDocument} from "../../Firebase/firebase.utils";

const SignUp = () => {
	const [userCredentials,setUserCredentials] =  useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword:''
	});
	const {displayName,password,email,confirmPassword} = userCredentials;

	const handleSubmit = async event =>{
		event.preventDefault();
		if(password!==confirmPassword){
			alert("Password don't match");
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);

			await createUserProfileDocument(user, { displayName });

			setUserCredentials({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			});
		} catch (error) {
			console.error(error);
		}
	}


	const handleChange = async event=>{
		const {name,value} = event.target;
		setUserCredentials({...userCredentials,[name] : value});


	}


	return(
		<div className="signUpContainer">
			<h1 className="signUpTitle">
				I do not have a account
			</h1>
			<span>Sign up with your email and password</span>
			<form className='sign-up-form' onSubmit={handleSubmit}>
				<FormInput
					type='text'
					name='displayName'
					value={displayName}
					onChange={handleChange}
					label='Display Name'
					required
				/>
				<FormInput
					type='email'
					name='email'
					value={email}
					onChange={handleChange}
					label='Email'
					required
				/>
				<FormInput
					type='password'
					name='password'
					value={password}
					onChange={handleChange}
					label='Password'
					required
				/>
				<FormInput
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					onChange={handleChange}
					label='Confirm Password'
					required
				/>
				<CustomButton type='submit'>SIGN UP</CustomButton>
			</form>
		</div>
		)
}


export default SignUp;