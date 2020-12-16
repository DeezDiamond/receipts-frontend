// // Will show a list of multiple receipts uploaded by the user. 

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './displays.css';
import URL from '../../config';
import axios from 'axios';

const Displays = () => {
    const [receipt, setReceipt] = useState([]);
	const nostalgia = `${URL}/receipts`;
	useEffect(() => {
		axios(nostalgia)
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
								<img src={receipt.imgUrl} alt='{receipt.title}' />
								<div className='card-name'>{receipt.title}</div>
							</div>
						</Link>
					);
				})}
			</div>
		);
};

export default Displays;