import Navbar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Client from './Components/FormRegister/Client';
import ViewProduct from './Components/Product/ViewProduct';


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <div className="cardProducts">
          <ViewProduct />
        </div>
        <Route exact path="/"/>
        <Route path="/newUser" component={Client} />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
