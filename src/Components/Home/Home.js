/// This content must be in the inital page, just a few products are added//
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom';
import './Home.css';

const Home = (props) => {
	const [products, setProducts] = React.useState([]);

	React.useEffect(() => {
		fetch('https://resilia-marketplace.herokuapp.com/products')
			.then((res) => res.json())
			.then((json) => {
				setProducts(json);
				console.log(json);
			});
	}, []);

	console.log(products);
	return (
		<Carousel style={{ width:"400px", margin: "0 auto"}}>
			{products.map((item, index) => {
				if (index < 12)
					return (
						<Carousel.Item>
							<Link to={`/products/${item.id}`}>
								<img
									className="d-block w-100"
									src={item.img}
									alt="First slide"
									style={{marginTop:"25px",height: '400px'}}
								/>
							</Link>
							<Carousel.Caption>
								<h3>{item.name}</h3>
								<p>{item.description}</p>
							</Carousel.Caption>
						</Carousel.Item>
					);
			})}
		</Carousel>
	);
};
export default Home;
