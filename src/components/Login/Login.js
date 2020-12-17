import axios from 'axios';
import React, { useState, useEffect } from 'react';
import URL from '../../config';
import { Redirect } from 'react-router-dom';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [token, setToken] = useState();
	// useEffect(() => {
	// 	const loggedInToken = localStorage.getItem('token');
	// 	if (loggedInToken) {
	// 		const foundToken = JSON.parse(loggedInToken);
	// 		setToken(foundToken);
	// 	}
	// }, []);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = { email, password };
		// send the email and password to the server
		const response = await axios.post(
			`${URL}/token/login`,
			data
		);
		// set the state of the user
		setToken(response.data.auth_token);
		// store the user in localStorage
		localStorage.setItem('token', response.data.auth_token);
		console.log(response.data);
	};

	// if there's a user show the message below
	if (token) {
		return <div>You're loggged in</div>;
	}

	// if there's no user, show the login form
	return (
        <div>
            <p>Log in to manage your receipts</p>
		<form onSubmit={handleSubmit}>
			<label htmlFor='email'>Email: </label>
			<input
				type='email'
				value={email}
				placeholder='enter a valid email'
				onChange={({ target }) => setEmail(target.value)}
			/>
			<div>
				<label htmlFor='password'>password: </label>
				<input
					type='password'
					value={password}
					placeholder='enter a password'
					onChange={({ target }) => setPassword(target.value)}
				/>
			</div>
			<button type='submit' className='pretty-button'>Login</button>
		</form>
        </div>
	);
};

export default Login;

// // https://www.freecodecamp.org/news/how-to-persist-a-logged-in-user-in-react/
