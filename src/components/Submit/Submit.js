// // Form to upload a new receipt. 

import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import "./submit.css";
// import FileUploader from "../../FileUploader"
import URL from "../../config"

const Submit = () => {
    const history = useHistory();
	const fileInput = useRef(null);

    const [receipt, setReceipt] = useState({
        retailer: "",
        date: "",
        amount: "",
        receipt_image: "",
        items: "",
    });

    const handleChange = (event) => {
			event.persist();
			setReceipt({ ...receipt, [event.target.name]: event.target.value });
		};
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const url = `${URL}/receipts/`;

        axios({
            url: url,
            method: "POST",
            data: receipt,
        }).then((res) => {
            history.pushState("/");
        })
        .catch(error => {
            console.log(error.response);
        });
    };

	return (
		<div>
			<form onSubmit={handleSubmit} className='form'>
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

           <label htmlFor="date">Purchase Date:</label>
                <input 
                    required
                    onChange={handleChange}
                    input type="date"
                    name="date"
                    id="date"
                    value={receipt.date}
                    placeholder="Date"
                /> <br />

            <label htmlFor="amount">Receipt Total:</label>
                <input 
                    required
                    onChange={handleChange}
                    input type="number"
                    name="amount"
                    id="amount"
                    value={receipt.amount}
                    placeholder="Receipt Total (include taxes)"
                /> <br />

                <label htmlFor="upload">Upload Image:</label>
                <input 
                    type='file' 
                    onChange={handleChange} 
					name="receipt_image"
					id="receipt_image"
					value={receipt.receipt_image} 
                /> <br />

            <label htmlFor="items">Items Purchased:</label>
                <input 
                    onChange={handleChange}
                    type="text"
                    name="items"
                    id="items"
                    value={receipt.items}
                    placeholder="What you bought"
                    /> <br />

				<button
					onClick={(handleSubmit)}
					className='pretty-button'>
					Add Receipt
				</button>
			</form>
		</div>
	);
};

export default Submit;