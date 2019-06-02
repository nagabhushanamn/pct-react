import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import classNames from 'classnames';

class App extends React.Component {

  state = {
    currentTab: 1,
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

  changeTab(e, tabIndex) {
    e.preventDefault();
    this.setState({ currentTab: tabIndex })
  }

  renderBuyBtn(item) {
    if (item.canBuy)
      return (<button className="btn btn-sm btn-primary">buy</button>)
  }

  renderTabPanel(item) {
    let { currentTab } = this.state;
    switch (currentTab) {
      case 1: return (
        <div>{item.description}</div>
      )
      case 2: return (
        <div>Not Yet</div>
      )
      case 3: return (
        <div>None Yet</div>
      )
      default: return null;
    }
  }

  renderItems() {
    let { items, currentTab } = this.state;
    return items.map((item, idx) => {
      return (
        <div key={idx} className="list-group-item">
          <div className="row">
            <div className="col-3 col-sm-3 col-md-3">
              <img src={item.image} className="img-fluid" alt={item.name} />
            </div>
            <div className="col-9 col-sm-9 col-md-9">
              <h5>{item.name}</h5>
              <h6>&#8377;{item.price}</h6>
              {/* {item.canBuy ? <button className="btn btn-sm btn-primary">buy</button> : null} */}
              {this.renderBuyBtn(item)}
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a onClick={e => this.changeTab(e, 1)} className={classNames('nav-link', { active: currentTab === 1 })} href="/">Description</a>
                </li>
                <li className="nav-item">
                  <a onClick={e => this.changeTab(e, 2)} className={classNames('nav-link', { active: currentTab === 2 })} href="/">Ingre..</a>
                </li>
                <li className="nav-item">
                  <a onClick={e => this.changeTab(e, 3)} className={classNames('nav-link', { active: currentTab === 3 })} href="/">Reviews</a>
                </li>
              </ul>
              {this.renderTabPanel(item)}
            </div>
          </div>
        </div>

      )
    })
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-info">
          <a className="navbar-brand" href="/">eat IT</a>
        </nav>
        <hr />
        <hr />
        {this.renderItems()}
      </div>
    );
  }
}

export default App;
