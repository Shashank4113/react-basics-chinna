import Dashboard from './components/Dashboard';
import Signin from './components/Signin';
import Add from './components/Add';
import Products from './components/Products';
import Product from './components/Product';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <NavBar />
          <Dashboard />
        </Route>
        <Route path="/signin">
          <NavBar />
          <Signin />
        </Route>
        <Route path="/signup">
         {/* signup */}
        </Route>
        <Route path="/products">
         <NavBar />
         <Products />
        </Route>
        <Route path="/contact">
         {/* contact */}
        </Route>
        <Route path="/addProduct">
          <NavBar />
          <Add />
        </Route>
        <Route path="/product/:id">
          <NavBar />
          <Product />
        </Route> 
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

