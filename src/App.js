import Navbar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Client from './Components/FormRegister/Client';
import Products from './Components/Product/Products';
import ViewProduct from './Components/Product/ViewProduct';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
          <Switch>
            <Route exact path="/" children={<Home/>}/>
            <Route exact path="/products/" children={<Products />} />
            <Route path ="/products/:id" children={<ViewProduct/>} />
            <Route path="/newUser" children={<Client/>} />          
          </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
