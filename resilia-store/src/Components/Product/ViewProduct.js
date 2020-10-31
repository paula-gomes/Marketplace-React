import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';


import './Product.css';

//this must be in another page

function ViewProducts (props) {

	const{id}= useParams(props);   
    const [data, setData] = useState({});



    useEffect(() => {
        const fetchProduct = async () => {
        const response = await axios(`https://resilia-marketplace.herokuapp.com/products/${id}`);
        setData(response.data);
        };
        fetchProduct();
    }, [id]);

    return (
        <>
          <Button variant="primary" onClick={setData}>
            Comprar
          </Button>
        </>
    )
}

    


export default ViewProducts;