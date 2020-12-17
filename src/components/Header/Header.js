// // Will contain navigation and indication that the user is logged in. 
import React, { useState } from 'react';
import { Link, Route, useHistory } from 'react-router-dom';
import Login from '../../components/Login/Login';
import './header.css';
import "../../index.css"

const Header = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
	const [user, setUser] = useState()
	const history = useHistory();

    const handleLogout = () => {
		localStorage.clear();
		history.push('/login');
	};
    return (
		<div className='header'>
			<h1>Save Your Receipts</h1>
			<nav>
				<Link to='/'>Home Page</Link> »
				<Link to='/submit'>Upload Receipt</Link> 
				<button onClick={handleLogout} className="pretty-button">logout</button>
			</nav>

			{/* {token && <h2>You are logged in!!</h2>} */}

		</div>
    );
};

export default Header;