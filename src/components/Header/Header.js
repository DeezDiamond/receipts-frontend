// // Will contain navigation and indication that the user is logged in. 
import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import Login from '../../components/Login/Login';
import './header.css';

const Header = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState()

    const handleLogout = () => {
		setUser({});
		setEmail('');
		setPassword('');
		localStorage.clear();
	};
    return (
		<div className='header'>
			<h1>Save Your Receipts</h1>
			<nav>
				<Link to='/'>Home Page</Link> »
				<Link to='/submit'>Upload Receipt</Link> »
				<Link to='/login'>Login</Link> »<Link to='/register'>Register</Link>
			</nav>

			{/* {token && <h2>You are logged in!!</h2>} */}
            <button onClick={handleLogout}>logout</button>
		</div>
    );
};

export default Header;