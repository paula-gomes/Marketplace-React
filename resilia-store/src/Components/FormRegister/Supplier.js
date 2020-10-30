import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'


export default function FormSupplier() {

	return (
		<>
			<Form.Row>
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Name</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridPassword">
						<Form.Label>Razao Social</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
				</Form.Row>
			<Form>			
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
						<Form.Label>CNPJ</Form.Label>
						<Form.Control />
					</Form.Group>

				</Form.Row>
				<Button variant="primary" type="submit">
					Register
				</Button>
			</Form>
		</>)
}