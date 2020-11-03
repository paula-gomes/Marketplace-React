import React from 'react';
import { Link, Switch, Route, useParams } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './Product.css';

//this must be in another page
function ViewProduct(props) {


  const [product, setProduct] = React.useState([]);
  const { id } = useParams();
  console.log(id);
  React.useEffect(() => {
    fetch(`https://resilia-marketplace.herokuapp.com/products/${id}`)
      .then(res => res.json())
      .then(json => setProduct(json))
  }, [id])


  return (
    <>
      {
        product.map(item => (
          <Card key={item.id}>
            <Card.Title>{item.name}</Card.Title>
            <div className="productInfo">
              <Card.Img className="cardImg" variant="top" src={item.img} />
              <Card.Text>{item.description}</Card.Text>              
            </div>
            <Button variant="primary" style={{ width: "100px"}}> Finalizar compra</Button> 
          </Card>

        ))
      }

    </>
  )
}

export default ViewProduct;
