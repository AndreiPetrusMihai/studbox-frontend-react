import React,{useState} from 'react';
import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.styles.scss';

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
	}


	const handleChange = event=>{
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