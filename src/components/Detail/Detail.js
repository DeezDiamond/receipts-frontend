// // Will display detailed information about an individual receipt. 

import React, { useState, useEffect } from 'react';
import './detail.css';
import axios from 'axios';
import { Redirect, useHistory } from 'react-router-dom';
import APIURL from '../../config';
import Header from "../Header/Header"

const receiptInfo = `${APIURL}/receipts`;

const Detail = ({match}) => {
	const [detail, setDetail] = useState("");
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
				setDetail(res.data);
			})
			.catch((error) => {
				console.log(error.response);
			});
	}, []);

	return (
		<div>
			<Header /> hi
			<img src={detail.receipt_image} alt={detail.retailer} />
			<p>{detail.items}</p>
		</div>
	);
};

export default Detail;