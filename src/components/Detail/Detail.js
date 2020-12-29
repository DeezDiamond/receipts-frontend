// // Will display detailed information about an individual receipt. 

import React, { useState, useEffect } from 'react';
import './detail.css';
import "../../index.css"
import axios from 'axios';
import APIURL from '../../config';
import Header from "../Header/Header"
import { Redirect, useHistory } from 'react-router-dom';

const receiptInfo = `${APIURL}/receipts`;

const Detail = ({match}) => {
	const [redirect, setRedirect] = useState(false);
	const [receipt, setReceipt] = useState("");
	const url = `${receiptInfo}/${match.params.id}/`

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


	// // Update a receipt.

	const [file, setFile] = useState(null);
	const receiptUpdate = (event) => {
		event.preventDefault();
		const formData = new FormData();
        formData.append("receipt_image", file)
        formData.append("retailer", receipt.retailer)
        formData.append("date", receipt.data)
        formData.append("amount", receipt.amount)
        formData.append("items", receipt.items)
		axios({
			url: url,
			method: 'PUT',
			data: formData,
			headers: {
					'content-type': 'multipart/form-data;',
					"Authorization": `Token ${localStorage.getItem('token')}`,
				}

			}).then((res) => {
			})
			.catch(error => {
            console.log(error.response);
        });
	}

	const handleChange = (event) => {
		event.persist();
		setReceipt({...receipt, [event.target.name]: event.target.value});
	}


	// // Delete a receipt submission. 
	const receiptDelete = (event) => {
		axios({
			url: url,
			method: 'DELETE',
			headers: {
				'content-type': 'multipart/form-data',
				Authorization: `Token ${localStorage.getItem('token')}`,
			},
		}).then((res) => {
			setRedirect(true);
		});
	}

	if (redirect) {
		return <Redirect to='/' />;
	}

	return (
		<div>
			<Header />
			<div>
				<img src={receipt.receipt_image} alt={receipt.retailer} />
				<p>{receipt.retailer}</p>
				<p>{receipt.amount}</p>
				<p>{receipt.items}</p>

				<form className='form'>
					<label htmlFor='retailer'>Retailer:</label>
					<input
						required
						onChange={handleChange}
						name='retailer'
						id='retailer'
						value={receipt.retailer}
						placeholder='Retailer'
					/>
					<br />
					<label htmlFor='date'>Purchase Date:</label>
					<input
						required
						onChange={handleChange}
						input
						type='date'
						name='date'
						id='date'
						value={receipt.date}
						placeholder='Date'
					/>{' '}
					<br />
					<label htmlFor='amount'>Receipt Total:</label>
					<input
						required
						onChange={handleChange}
						input
						type='number'
						name='amount'
						id='amount'
						value={receipt.amount}
						placeholder='Receipt Total (include taxes)'
					/>{' '}
					<br />
					<label htmlFor='upload'>Upload Image:</label>
					<input
						type='file'
						onChange={(event) => {
							const file = event.target.files[0];
							setFile(file);
						}}
						name='receipt_image'
						id='receipt_image'
						accept='image/png, image/jpeg, image/jpg'
					/>{' '}
					<br />
					<label htmlFor='items'>Items Purchased:</label>
					<input
						onChange={handleChange}
						type='text'
						name='items'
						id='items'
						value={receipt.items}
						placeholder='What you bought'
					/>{' '}
					<br />
					<button onClick={receiptUpdate} className='pretty-button'>
						Update Receipt
					</button>
				</form>

				<button className='pretty-button' onClick={receiptDelete}>
					Delete Receipt
				</button>
			</div>
		</div>
	);
};

export default Detail;