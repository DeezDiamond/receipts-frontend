import React, { useState } from 'react';
import Axios from 'axios';
import URL from '../../config';
import "../../index.css"
import { Link, Redirect } from 'react-router-dom';

const Register = () => {
	const register = {
		email: '',
		password: '',
		password2: '',
		errors: {},
	};
	const [passwordError, setPasswordError] = useState(false);
	const [redirect, setRedirect] = useState(false);
	const [joinState, setJoinState] = useState(register);
	const handleChange = (event) => {
		event.persist();
		setJoinState({ ...joinState, [event.target.id]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setJoinState(register);
		if (joinState.password === joinState.password2) {
			Axios({
				url: `${URL}/users/`,
				method: 'POST',
				data: joinState,
			}).then((res) => {
				console.log(res);
				setRedirect(true);
			});
		} 
	};

	if (redirect) {
		return <Redirect to='/login' />;
	}

	return (
		<div>
			<p className='sign-up'>
				Sign up for an account to maintain your uploaded receipts. Once signed
				up, you will be prompted to login.
			</p>
			<form onSubmit={handleSubmit} className='regForm'>
				<div className='form-component'>
					<label htmlFor='email'>Email: </label>
					<input
						required
						type='email'
						id='email'
						value={joinState.email}
						onChange={handleChange}
					/>
				</div>
				<div className='form-component'>
					<label htmlFor='password'>Password: </label>
					<input
						required
						onChange={handleChange}
						type='password'
						id='password'
						value={joinState.password}
					/>
				</div>
				<div className='form-component'>
					<label htmlFor='password2'>Confirm Password: </label>
					<input
						required
						onChange={handleChange}
						type='password'
						id='password2'
						value={joinState.password2}
					/>
				</div>
				<button type='submit' className='pretty-button'>
					Sign up
				</button>
				{passwordError && <h3>Passwords must match.</h3>}
				<button className='pretty-button'>
					<Link to='/login'>Cancel</Link>
				</button>
				
			</form>
		</div>
	);
};

export default Register;
