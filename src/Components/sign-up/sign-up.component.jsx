import React,{useState} from 'react';
import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.styles.scss';
import {signUpStart} from "../../Redux/User/user.actions";
import {connect} from 'react-redux';
//POST userID name surname email university

const SignUp = ({signUpStart}) => {
	const [userCredentials,setUserCredentials] =  useState({
		name : '',
		surname : '',
		email : '',
		university : '',
		password : '',
		confirmPassword : ''
	});

	const {name,surname,email,university,password,confirmPassword} = userCredentials;

	const handleSubmit = async event =>{
		event.preventDefault();
		if(password!==confirmPassword){
			alert("Passwords don't match");
			return;
		}
		console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
		signUpStart({name,surname,email,university,password});

		setUserCredentials({
			name : '',
			surname : '',
			email : '',
			university : '',
			password : '',
			confirmPassword : ''
		});

	}

	const handleChange = async event=>{
		const {name,value} = event.target;
		setUserCredentials({...userCredentials,[name] : value});
	}

	return(
		<div className="signUpContainer">
			<h1 className="signUpTitle">
				I do not have an account
			</h1>
			<span>Sign up with your email and password</span>
			<form className='sign-up-form' onSubmit={handleSubmit}>
				<FormInput
					type='text'
					name='name'
					value={name}
					onChange={handleChange}
					label='Name'
					required
				/>
				<FormInput
					type='text'
					name='surname'
					value={surname}
					onChange={handleChange}
					label='Surname'
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
					type='text'
					name='university'
					value={university}
					onChange={handleChange}
					label='University'
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
				<div className="signUpButtonContainer">
					<CustomButton type='submit'>SIGN UP</CustomButton>

				</div>
			</form>
		</div>
		)
}

const mapDispatchToProps = (dispatch) => ({
	signUpStart : (userData) => dispatch(signUpStart(userData))
})

export default connect(null,mapDispatchToProps)(SignUp);