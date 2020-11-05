import React, { useState, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UserContext from '../../UserContext';


function ModalConfirm(props) {

	const { user } = useContext(UserContext);
	const { id } = props.value;
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


	const sale = (event) => {
		event.preventDefault();

		const body = {
			user_id: user.id,
			product_id: id
		};

		fetch('https://resilia-marketplace.herokuapp.com/sales/newSale', {
			method: 'POST',
			body: JSON.stringify(body),
			headers: { 'Content-Type': 'application/json' },
		})
			.then(() => {
				console.log('foi')
				window.alert(`Olá ${user.name}, sua compra foi efetuada`)
				handleClose();
			}
		)			
			.catch((err) => console.log(err, 'fetch post sales'));
	}

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
							<Button variant="success" className="mr-4" onClick={sale}>
								Confirmar Compra
							</Button >
						</div>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default ModalConfirm;
