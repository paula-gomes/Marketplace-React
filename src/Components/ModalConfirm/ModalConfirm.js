import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalConfirm(props) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	console.log(props);

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				Finalizar Compra
			</Button>

			<Modal
				size="lm"
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>{props.value.name}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="d-flex justify-content-around flex-column">
						<div className="ml-5">
							<Card.Text>
								<strong>Descrição:</strong> {props.value.description}
							</Card.Text>
							<Card.Text>
								<strong>Valor da compra:</strong> R${props.value.price}
							</Card.Text>
							<Card.Text>
								<strong>Avaliação:</strong> {props.value.rating}
							</Card.Text>
						</div>
						<div className="d-flex justify-content-end mt-4 ">
							<Button variant="danger" onClick={handleClose} className="mr-4">
								Voltar
							</Button>
							<Button variant="success" className="mr-4">
								Confirmar Compra
							</Button>
						</div>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default ModalConfirm;
