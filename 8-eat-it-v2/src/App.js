import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import Item from './components/Item';
import CartBadge from './components/CartBadge';
import CartView from './components/CartView';

class App extends React.Component {

  state = {
    isCartOpen: false,
    cart: {},
    items: [
      {
        id: 1,
        name: 'Veg',
        price: 100.00,
        description: 'Veg item',
        canBuy: true,
        image: 'images/veg1.png'
      },
      {
        id: 2,
        name: 'NonVeg',
        price: 200.00,
        description: 'Non veg item',
        canBuy: true,
        image: 'images/non-veg.png'
      }
    ]
  }

  toggleCart(e) {
    e.preventDefault();
    let { isCartOpen } = this.state;
    this.setState({ isCartOpen: !isCartOpen })
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

  renderItems() {
    let { items, cart, isCartOpen } = this.state;
    if (!isCartOpen)
      return items.map((item, idx) => {
        let itemLine = cart[item.id] || {}
        let qty = itemLine.qty || 0;
        return (
          <div key={idx} className="list-group-item">
            <Item value={item} qty={qty} onBuy={item => this.addToCart(item)} />
          </div>
        )
      })
  }

  renderCart() {
    let { cart, isCartOpen } = this.state;
    if (isCartOpen)
      return <CartView value={cart} />
  }

  render() {
    let { cart, isCartOpen } = this.state;
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-info">
          <a className="navbar-brand" href="/">eat IT</a>
        </nav>
        <hr />
        <CartBadge value={cart} />
        <hr />
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a onClick={e => this.toggleCart(e)} className="nav-link" href="/">{isCartOpen ? 'Items' : 'Cart'}</a>
          </li>
        </ul>
        <hr />
        {this.renderCart()}
        <br />
        {this.renderItems()}
      </div>
    );
  }
}

export default App;
