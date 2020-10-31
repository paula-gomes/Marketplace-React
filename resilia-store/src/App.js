import Navbar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Client from './Components/FormRegister/Client';
import Products from './Components/Product/Products';
import ViewProduct from './Components/Product/ViewProduct';


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Navbar />
          </Route>
          <Route path="/products">
            <div className="cardProducts">
              <Products />
            </div>
          </Route>
          <Route path="/newUser">
            <Client />
          </Route>
         
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
