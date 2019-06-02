import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import CartBadge from './components/CartBadge';
import CartView from './components/CartView';
import Home from './components/Home';
import NotFound from './components/NotFound';


import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import ItemList from './components/ItemList';

class App extends React.Component {

  render() {
    return (
      <div className="container">

        <nav className="navbar navbar-light bg-info">
          <a className="navbar-brand" href="/">eat IT</a>
        </nav>

        <Router>
          <div>
            <hr />
            <CartBadge />
            <hr />
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/items">Items</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">Cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/orders">Orders</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/account">Account</Link>
              </li>
            </ul>
            <hr />

            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/items" render={() => <ItemList />} />
              <Route path="/cart" component={CartView} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
