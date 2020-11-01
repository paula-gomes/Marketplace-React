import Navbar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Client from './Components/FormRegister/Client';
import Products from './Components/Product/Products';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
          <Switch>
            <Route exact path="/" />
            <Route path="/products/" children={<Products />} />
            <Route path="/newUser" children={<Client />} />
          
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
