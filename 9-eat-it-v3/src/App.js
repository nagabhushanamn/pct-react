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

  state = {
    cart: {},
  }

  addToCart(item, qty) {
    let { cart } = this.state;
    let { id } = item;
    let itemLine = cart[id];
    if (itemLine) {
      itemLine = { item, qty: itemLine.qty + 1 }
    } else {
      itemLine = { item, qty: 1 }
    }
    cart = { ...cart, [id]: itemLine }
    this.setState({ cart })
  }


  renderCart() {
    let { cart } = this.state;
    return <CartView value={cart} />
  }

  render() {
    let { cart } = this.state;
    return (
      <div className="container">

        <nav className="navbar navbar-light bg-info">
          <a className="navbar-brand" href="/">eat IT</a>
        </nav>

        <Router>
          <div>
            <hr />
            <CartBadge value={cart} />
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
              <Route path="/items" render={() => <ItemList cart={cart} onBuy={item => this.addToCart(item)} />} />
              <Route path="/cart" render={() => this.renderCart()} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
