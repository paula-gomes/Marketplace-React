import React from "react";
import './Footer.css';
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Logo from '../../assets/logo.png';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const Footer = () => {

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xl={10}>
            <a href='/'>
					    <img className="logo" src={Logo} alt="logo" />
				    </a>
          </Col>
          <Col xl={1}>     
            <a href="https://www.youtube.com/c/SpeakupTech"><FaYoutube/></a>     
            <a href="https://www.youtube.com/c/SpeakupTech"><FaInstagram/></a>
            <a href="https://www.youtube.com/c/SpeakupTech"><FaTwitter/></a>

          </Col>
        </Row>
      </Container>        
    </footer>
  )
}
export default Footer