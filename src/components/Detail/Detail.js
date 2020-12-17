// // Will display detailed information about an individual receipt. 

import React, { useState, useEffect } from 'react';
import './detail.css';
import axios from 'axios';
import { Redirect, useHistory } from 'react-router-dom';
import APIURL from '../../config';

const receiptInfo = `${APIURL}/receipts`;

const Detail = ({ match }) => {
	const history = useHistory();
	const [detail, setDetail] = useState('');
	const [receipt, setReceipt] = useState('');
	useEffect(() => {
		const url = `${receiptInfo}${match.params.id}`;
		console.log(url);
		axios({
			url: receiptInfo,
			headers: {
				'content-type': 'multipart/form-data',
				Authorization: `Token ${localStorage.getItem('token')}`,
			},
		})
			.then((res) => {
				setReceipt(res.data);
			})
			.catch((err) => {
				return 'There appears to be a file with Detail.js.';
			});
	}, []);

	// Delete a Submission
	const handleDelete = (event) => {
		const url = `${receiptInfo}${match.params.id}`;
		axios({
			url: url,
			method: 'DELETE',
		})
			.then(() => {
				history.push('/');
			})
			.catch((err) => {
				console.error(err);
			});
	};

	// // Update a receipt

	const handleSubmit = (event) => {
		event.preventDefault();
		const url = `${receiptInfo}${match.params.id}`;
		axios({
			url: url,
			method: 'PUT',
			data: detail,
			headers: {
				'content-type': 'multipart/form-data',
				Authorization: `Token ${localStorage.getItem('token')}`,
			},
		}).then(() => {
			history.push('/');
		});
	};

	const handleChange = (event) => {
		event.persist();
		setDetail({ ...detail, [event.target.name]: event.target.value });
	};

	return (
		<div>
			<button className='pretty-button' onClick={handleDelete}>
				Delete Receipt
			</button>
		</div>
	);
};

export default Detail;