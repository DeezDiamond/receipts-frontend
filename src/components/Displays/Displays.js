// // Will show a list of multiple receipts uploaded by the user.

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './displays.css';
import URL from '../../config';
import axios from 'axios';
import Header from '../Header/Header';

const Displays = () => {
	const [receipt, setReceipt] = useState([]);

	const userReceipts = `${URL}/receipts`;
	useEffect(() => {
		axios({
			url: userReceipts, 
			headers: {
				"content-type": "multipart/form-data",
                "Authorization": `Token ${localStorage.getItem("token")}`
			}})
			.then((res) => {
				setReceipt(res.data);
			})
			.catch((err) => {
				return err;
			});
	}, []);

	return (
		<div>
			<Header />
		<div className='holder'>

			{receipt.map((receipt) => {
				return (
					<Link to={`receipts/${receipt.id}/`} key={receipt.id}>
						<div className='card'>
							<img src={receipt.receipt_image} alt={receipt.retailer} />
							<div className='card-name'>{receipt.retailer}, ${receipt.amount}</div>
						</div>
					</Link>
				);
			})}
		</div>
		</div>
	);
};

export default Displays;
