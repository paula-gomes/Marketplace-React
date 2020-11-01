import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'


export default function FormProduct() {

    return (
        <>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} md="6"controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control placeholder="Name" />
                    </Form.Group>

                    <Form.Group as={Col} md="3" controlId="formGridEmail">
                        <Form.Label>Price</Form.Label>
                        <Form.Control />
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridEmail">
                        <Form.Label>InStorage</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Url Image </Form.Label>
                    <Form.Control />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
				</Button>
            </Form>
        </>)
}