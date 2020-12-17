import axios from 'axios';
import React, { useState } from 'react';
import URL from '../../config';
import { Link } from 'react-router-dom';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [token, setToken] = useState();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = { email, password };
		// send the email and password to the server
		const response = await axios({
			method: "POST",
			url: `${URL}/token/login`,
			data: data
		});
		// set the state of the user
		setToken(response.data.auth_token);
		// store the user in localStorage
		localStorage.setItem('token', response.data.auth_token);

	};

	// if there's a user show the message below
	if (token) {
		return <div>You're loggged in. Go to your <Link to='/'>Home Page</Link>receipts</div>;
	}

	// if there's no user, show the login form
	return (
        <div>
            <p>Log in to manage your receipts. If you don't have an account, please <Link to="/register">register for an account</Link></p>
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

			<button className='pretty-button'>
				<Link to='/register'>Register</Link>
			</button>
		</form>
		
        </div>
	);
};

export default Login;

// // https://www.freecodecamp.org/news/how-to-persist-a-logged-in-user-in-react/
