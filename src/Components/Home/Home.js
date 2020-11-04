/// This content must be in the inital page, just a few products are added//
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';

const Home = (props) => {

	const [products, setProducts] = React.useState([]);

	React.useEffect(() => {
		fetch('https://resilia-marketplace.herokuapp.com/products')
			.then(res => res.json())
			.then(json => {
				setProducts(json)
				console.log(json)
			})
	}, [])


	console.log(products);
	return (
		<Carousel>
			
    {
      products.map((item, index) => {
        if(index <3)
        return (

        <Carousel.Item>
          <img
            className="carouselImg"
            src= {item.img}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

      )})
      }					
		</Carousel>
		
    )
}


export default Home;