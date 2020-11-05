import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import React, { useState } from 'react';

const Client = () => {

	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [pwrd, setPwrd] = useState();
	const [cpf, setCpf] = useState();
	const [phone, setPhone] = useState();
	const [address, setAddress] = useState();


	const submit = (event) => {

		event.preventDefault();

		const body = {
			name: name,
			email: email,
			password: pwrd,
			cpf: cpf,
			phone: phone,
			address: address
		}

		fetch('https://resilia-marketplace.herokuapp.com/clients/add', {
			method: 'POST',
			body: JSON.stringify(body),
			headers: { 'Content-Type': 'application/json' }
		})
			.then(()=> console.log('foi'))
			.catch(err => console.log(err, "fetch post"))
	}


	return (
		<div style={{ margin: "0 2vw" }}>
			<h1> Register now</h1>
			<form onSubmit={submit} >
				<Form.Row>
					<Form.Group as={Col} controlId="formGridName">
						<Form.Label>Name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Name"
							name="name"
							onChange={event => setName(event.target.value)}
						/>

					</Form.Group>

				</Form.Row>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter email"
							name="email"
							onChange={event => setEmail(event.target.value)}
						/>

					</Form.Group>

					<Form.Group as={Col} controlId="formGridPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Password"
							name="pwrd"
							onChange={event => setPwrd(event.target.value)}
						/>
					</Form.Group>
				</Form.Row>

				<Form.Group controlId="formGridAddress1">
					<Form.Label>Address</Form.Label>
					<Form.Control
						type="text"
						placeholder="1234 Main St"
						name="address"
						onChange={event => setAddress(event.target.value)}
					/>
				</Form.Group>

				<Form.Row>
					<Form.Group as={Col} controlId="formGridPhone">
						<Form.Label>Phone Number</Form.Label>
						<Form.Control
							type="text"
							placeholder="(11) 2629-8770"
							name="phone"
							onChange={event => setPhone(event.target.value)}
						/>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridCPF">
						<Form.Label>CPF</Form.Label>
						<Form.Control
							type="text"
							placeholder="15822369778"
							name="cpf"
							onChange={event => setCpf(event.target.value)}
						/>
					</Form.Group>
				</Form.Row>
				<Form.Control type="submit" name="Sign Up" width='50px'/>
			</form>
		</div>
	)
}

export default Client;