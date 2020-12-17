// // Form to upload a new receipt. 

import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import "./submit.css";
// import FileUploader from "../../FileUploader"
import URL from "../../config"
import Header from "../Header/Header"

const Submit = () => {
    const history = useHistory();
	const fileInput = useRef(null);

    const [receipt, setReceipt] = useState({
        retailer: "",
        date: "",
        amount: "",
        // receipt_image: "",
        items: "",
    });

    const [file, setFile] = useState(null);

    const handleChange = (event) => {
			event.persist();
			setReceipt({ ...receipt, [event.target.name]: event.target.value });
		};
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const url = `${URL}/receipts/`;
        const formData = new FormData()
        formData.append("receipt_image", file)
        formData.append("retailer", receipt.retailer)
        formData.append("date", receipt.data)
        formData.append("amount", receipt.amount)
        formData.append("items", receipt.items)

        axios({
            url: url,
            method: "POST",
            data: formData,
            headers: {
                    "content-type": "multipart/form-data",
                    "Authorization": `Token ${localStorage.getItem("token")}`
                }
            
        }).then((res) => {
            console.log(res);
            history.push("/");
        })
        .catch(error => {
            console.log(error.response);
        });
    };

	return (
		<div>
            <Header />
			<p>
				Upload your receipt. Tip: Even though your receipt will be uploaded to
				your account, most retailers require a physical receipt for returns. So
				hang onto it unless you're sure you don't need it anymore.
			</p>
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
					onChange={event => {
                        const file = event.target.files[0]
                        setFile(file)
                    }}
					name='receipt_image'
					id='receipt_image'
                    accept= "image/png, image/jpeg, image/jpg"
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
				<button onClick={handleSubmit} className='pretty-button'>
					Add Receipt
				</button>
			</form>
		</div>
	);
};

export default Submit;