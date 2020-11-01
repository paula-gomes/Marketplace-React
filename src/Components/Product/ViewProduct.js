import React, { useState, useEffect } from 'react';
import { Link , Switch , Route } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';


import './Product.css';

//this must be in another page

function ViewProducts ({ value }) {
  const [data, setData] = useState({});

  const { id } = value;

    // useEffect(() => {
    //     const fetchProduct = async () => {
    //     const response = await axios(`https://resilia-marketplace.herokuapp.com/products/${id}`);
    //     setData(response.data);
    //     };
    //     fetchProduct();
    // }, [id]);

    return (
        <>
          <Link to={`/products/${id}`} >
            <Button variant="primary" onClick={setData}>Mais</Button>
          </Link>
          <Switch>
            <Route path={`/products/${id}`}  />
          </Switch>
        </>
    )
}

/* children={} */


export default ViewProducts;