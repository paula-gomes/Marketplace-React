import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import './Product.css';

class ViewProduct extends Component {

	constructor(props) {
		super(props);
		this.state = {
			products: []
		};
	}

	componentDidMount() {
		fetch('https://resilia-marketplace.herokuapp.com/products')
			.then(res => res.json())
			.then((res) => {
				this.setState({
					products: res
				});
			});
	}


	render() {	
		const {products} = this.state;	
		return (	
		<>		
			{
				products.map(item => (
					<div className= "cardProducts" >
						<Card key={item.id} style={{ width: '18rem' }}>						
							<Card.Img className="cardImg" variant="top" src={item.img} />
							<Card.Body>
								<Card.Title>{item.name}</Card.Title>
								<Card.Text>
									{item.description}
								</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					</div>
				))
			}
		</>
		)
	}
}

export default ViewProduct;