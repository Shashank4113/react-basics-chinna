import Dashboard from './components/Dashboard';
import Signin from './components/Signin';
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
         {/* products */}
        </Route>
        <Route path="/contact">
         {/* contact */}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

