// // Will show a list of multiple receipts uploaded by the user. 

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './displays.css';
import URL from '../../config';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Displays = () => {
	const [receipt, setReceipt] = useState([]);
	const history = useHistory();

	const userReceipts = `${URL}/receipts`;
	useEffect(() => {
		axios(userReceipts)
			.then((res) => {
				setReceipt(res.data);
			})
			.catch((err) => {
				return 'There appears to be a file with Displays.js.';
			});
    }, []);
    
    return (
			<div className='holder'>
				{receipt.map((receipt) => {
					return (
						<Link to={`/${receipt._id}`} key={receipt._id}>
							<div className='card'>
								<img src={receipt.receipt_image} alt='{receipt.title}' />
								<div className='card-name'>{receipt.title}</div>
							</div>
						</Link>
					);
				})}
			</div>
		);
};

export default Displays;