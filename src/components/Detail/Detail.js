// // Will display detailed information about an individual receipt. 

import React, { useState, useEffect } from 'react';
import './detail.css';
import "../../index.css"
import axios from 'axios';
import { Redirect, useHistory } from 'react-router-dom';
import APIURL from '../../config';
import Header from "../Header/Header"

const receiptInfo = `${APIURL}/receipts`;

const Detail = ({match}) => {
	const [receipt, setReceipt] = useState("");
	const url = `${receiptInfo}/${match.params.id}`

	useEffect(() => {
		axios({
			url: url,
			method: "GET",
			headers: {
				'content-type': 'multipart/form-data',
				Authorization: `Token ${localStorage.getItem('token')}`,
			},
		})
			.then((res) => {
				setReceipt(res.data);
			})
			.catch((error) => {
				console.log(error.response);
			});
	}, []);

	// // Delete a receipt submission. 
	const receiptDelete = (event) => {
		// const url = `${receiptInfo}/${match.params.id}`;
		axios({
			url: url,
			method: 'DELETE',
			headers: {
				'content-type': 'multipart/form-data',
				Authorization: `Token ${localStorage.getItem('token')}`,
			},
		});
	}

	return (
		<div>
			<Header /> hi
			<img src={receipt.receipt_image} alt={receipt.retailer} />
			<p>{receipt.retailer}</p>
			<p>{receipt.amount}</p>
			<p>{receipt.items}</p>

			<button className='pretty-button' onClick={receiptDelete}>
				Delete Submission
			</button>
		</div>
	);
};

export default Detail;