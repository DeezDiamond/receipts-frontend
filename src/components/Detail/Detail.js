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
		axios(url)
			.then((res) => {
				setDetail(res.data);
				setReceipt(res.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [match.params.id]);

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