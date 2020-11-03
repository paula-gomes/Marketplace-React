import Card from 'react-bootstrap/Card';
import React from 'react';
import { Link } from 'react-router-dom';
import ViewProduct from './ViewProduct';
import Button from 'react-bootstrap/Button';

import './Product.css';

//this must be in another page

const Products = (props) => {
	const [products, setProducts] = React.useState([]);

	React.useEffect(() => {
		fetch('https://resilia-marketplace.herokuapp.com/products')
			.then(res => res.json())
			.then(json => setProducts(json))
	}, [])

	return (
		<section className="product-list">
			{
				products.map(item => (
					<Card key={item.id} style={{ width: '18rem', margin: "1.5em" }}>
						<Card.Img className="cardImg" variant="top" src={item.img} />
						<Card.Body>
							<Card.Title>{item.name}</Card.Title>
							<Card.Text>
								{item.description}
							</Card.Text>
							<Link to={`/products/${item.id}`} >
								<Button variant="primary" >Mais</Button>
							</Link>

						</Card.Body>
					</Card>
				))
			}
		</section>
	)
}

export default Products;