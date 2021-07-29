import Dashboard from './components/Dashboard';
import Signin from './components/Signin';
import Add from './components/Add';
import Products from './components/Products';
import Product from './components/Product';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import Contact from './components/Contact';
import Bikes from './components/Bikes';
import { BookProvider } from './BookContext';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <BookProvider>
            <NavBar />
            <Dashboard />
          </BookProvider>
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
        <NavBar />
         <Contact />
        </Route>
        <Route path="/addProduct">
          <NavBar />
          <Add />
        </Route>
        <Route path="/product/:id">
          <NavBar />
          <Product />
        </Route> 
        <Route path="/bikes">
          <NavBar />
          <Bikes />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

