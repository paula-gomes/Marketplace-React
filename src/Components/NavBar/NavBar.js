import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown'
import { Link, useHistory } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Logo from '../../assets/logo.png';
import UserImg from '../../assets/user.png';
import ModalSignIn from '../ModalSignIn/ModalSignIn';
import { useContext } from 'react';
import UserContext from '../../UserContext';


export default function NavBar() {

	const history = useHistory();
	const { user } = useContext(UserContext);

	return (
		<>
			<Navbar bg="light" variant="light">
				<Link to="/">
					<img className="logo" src={Logo} alt="logo" />
				</Link>

				<Form inline className="ml-auto" style={{ marginRight: "1vw" }} >
					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					<Button variant="outline-primary">Pesquisar</Button>
				</Form>

				<Dropdown>
					<Dropdown.Toggle>
						<img className="userImg" src={UserImg} alt="userImg" width="25" height="25" />
					</Dropdown.Toggle>
					<div className="registerDropdown">
						<Dropdown.Menu style={{ right: 0, left: "auto", textAlign: "center" }}>
							<Dropdown.Item>
								<div className="modalRegister">
									<ModalSignIn />
								</div>
							</Dropdown.Item>
							<div>
								<p>Not a client?</p>
							</div>
							<Dropdown.Item>
								<Link to='/newUser'>
									<Button variant="secondary" width="120px" >Register now!</Button>
								</Link>
							</Dropdown.Item>
						</Dropdown.Menu>
					</div>
				</Dropdown>

				<Nav className="mr-auto" >
					<Link to='/products'style={{ padding: "5px"}}>Products </Link>
					<Link href="#features" style={{ padding: "5px"}}>Supplier</Link>
				</Nav>				
			</Navbar>
		</>)
}