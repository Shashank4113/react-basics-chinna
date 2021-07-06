import Dashboard from './components/Dashboard';
import Signin from './components/Signin';
import Add from './components/Add';
import Products from './components/Products';
import Product from './components/Product';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
         {/* signup */}
        </Route>
        <Route path="/products">
         <Products />
        </Route>
        <Route path="/contact">
         {/* contact */}
        </Route>
        <Route path="/addProduct">
          <Add />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;

