// // Will contain navigation and indication that the user is logged in. 
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './header.css';
import "../../index.css"

const Header = () => {
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