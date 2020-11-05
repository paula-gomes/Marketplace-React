import React from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './Product.css'

import './Product.css';
import ModalConfirm from '../ModalConfirm/ModalConfirm';

function ViewProduct(props) {
	const [product, setProduct] = React.useState([]);
	const { id } = useParams();
	console.log(id);
	React.useEffect(() => {
		fetch(`https://resilia-marketplace.herokuapp.com/products/${id}`)
			.then((res) => res.json())
			.then((json) => setProduct(json));
	}, [id]);

	return (
		<>
			{product.map((item) => (
				<Card key={item.id}>
					<Card.Title style={{ padding: "10px", textAlign: "center" }}>{item.name}</Card.Title>
					<div className="d-flex justify-content-around flex-column">
						<div className="d-flex ml-5">
							<Card.Img className="cardImg" variant="top" src={item.img} />
							<div style={{ margin: "20px" }}>
								<Card.Text>
									<strong>Descrição:</strong> {item.description}
								</Card.Text>
								<Card.Text>
									<strong>Valor da compra:</strong> R${item.price}
								</Card.Text>
								<Card.Text>
									<strong>Avaliação:</strong> {item.rating}
								</Card.Text>
								<ModalConfirm value={{ ...item }} />
							</div>
						</div>

					</div>

				</Card>
			))}
		</>
	);
}

export default ViewProduct;
