import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


export default function FormClient() {

	return (
		<>
			<Form>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridName">
						<Form.Label>Name</Form.Label>
						<Form.Control placeholder="Name" />
					</Form.Group>

				</Form.Row>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
				</Form.Row>

				<Form.Group controlId="formGridAddress1">
					<Form.Label>Address</Form.Label>
					<Form.Control placeholder="1234 Main St" />
				</Form.Group>

				<Form.Row>
					<Form.Group as={Col} controlId="formGridPhone">
						<Form.Label>Phone Number</Form.Label>
						<Form.Control />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridCPF">
						<Form.Label>CPF</Form.Label>
						<Form.Control />
					</Form.Group>

				</Form.Row>
				<Button variant="primary" type="submit">
					Register
				</Button>
			</Form>
		</>)
}