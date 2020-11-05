import React, { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Request from '../../Components/Request/Request';
import UserContext from '../../UserContext';


function ModalSignIn(props) {

  const { login, user } = useContext(UserContext);

  const [email, setEmail] = useState();
  const [pwrd, setPwrd] = useState();
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const requestLogin = (event) =>{
    event.preventDefault();

    Request(email).then((res)=>{
      
      login(res[0].name,res[0].id)
      console.log(res[0].name,res[0].id)
      window.alert(`Olá ${res[0].name}, você esta logado`)
      handleClose();
    })    

  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Entre
      </Button>

      <Modal
        size="sm"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="https://resilia-marketplace.herokuapp.com/products" method="GET">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email </Form.Label>
              <Form.Control 
              type="email" 
              placeholder="Enter email"
              onChange={(event) => setEmail(event.target.value)}
              />
             
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">              
            </Form.Group>
            <Button onClick = {requestLogin} variant="primary" type="submit">
              Entre
            </Button>
          </form>
        </Modal.Body>        
      </Modal>
    </>
  );
}

export default ModalSignIn;
