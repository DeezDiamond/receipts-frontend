// // Register a new user

import React, { useState } from 'react';
import axios from 'axios';
import URL from '../../config';
import "../../index.css"
import "./register.css"
import { Link, Redirect } from 'react-router-dom';

const Register = () => {

	const [passwordError, setPasswordError] = useState(false);
	const [redirect, setRedirect] = useState();

	const signup = {
		username: "",
		email: '',
		password: '',
		re_password: '',
		errors: {},
	};

	const [user, setUser] = useState(signup);

	const handleChange = (event) => {
		event.persist();
		setUser({ ...user, [event.target.id]: event.target.value });
	};

    const handleSubmit = (event) => {
        event.preventDefault();
        const url = `${URL}/users/`;
        const formData = new FormData()
        formData.append("username", user.username)
        formData.append("email", user.email)
        formData.append("password", user.password)
        formData.append("re_password", user.re_password)

        axios({
            url: url,
            method: "POST",
            data: formData,
            headers: {
                    "content-type": "multipart/form-data",
                }
            
        }).then((res) => {
            console.log(res);
            redirect.push("/login");
        })
        .catch(error => {
            console.log(error.response);
        });
    };

	if (redirect) {
		return <Redirect to='/login' />;
	}

	return (
		<div className='container'>
			<div className='registrationFormContainer'>
				<p>
					Sign up for an account to maintain your uploaded receipts. Passwords
					must be at least 8 characters long.
				</p>
				<div className='registrationFormLegend'>Registration Form</div>
				<form className='regForm'>
					<div className='form-component'>
						<label htmlFor='username'>Username: </label>
						<input
							required
							type='text'
							id='username'
							value={user.username}
							onChange={handleChange}
						/>
					</div>

					<div className='form-component'>
						<label htmlFor='email'>Email: </label>
						<input
							required
							type='email'
							id='email'
							value={user.email}
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
							value={user.password}
						/>
					</div>
					<div className='form-component'>
						<label htmlFor='re_password'>Confirm Password: </label>
						<input
							required
							onChange={handleChange}
							type='password'
							id='re_password'
							value={user.re_password}
						/>
					</div>
					<button
						onClick={handleSubmit}
						type='submit'
						className='pretty-button'>
						Sign up
					</button>
					{passwordError && <h3>Passwords must match.</h3>}
					<button className='pretty-button'>
						<Link to='/login'>Sign In</Link>
					</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
