import React from 'react';
import {useParams} from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import './Product.css';
import ModalConfirm from '../ModalConfirm/ModalConfirm';

function ViewProduct(props) {
	const [product, setProduct] = React.useState([]);
	const {id} = useParams();
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
					<Card.Title>{item.name}</Card.Title>
					<div className="productInfo">
						<Card.Img className="cardImg" variant="top" src={item.img} />
						<Card.Text>{item.description}</Card.Text>
					</div>
					<ModalConfirm value={{...item}} />
				</Card>
			))}
		</>
	);
}

export default ViewProduct;
