import React, { Component } from 'react';
import classNames from 'classnames';
import Review from './Review';


class Item extends Component {

    state = {
        currentTab: 1,
        reviews: [
            { stars: 5, body: 'yummy', author: 'who@mail.com' },
            { stars: 1, body: 'yaky', author: 'who@mail.com' }
        ]
    }

    changeTab(e, tabIndex) {
        e.preventDefault();
        this.setState({ currentTab: tabIndex })
    }

    handleBuy() {
        let { value: item, onBuy } = this.props;
        if (onBuy)
            onBuy(item);
    }

    renderBuyBtn(item) {
        if (item.canBuy)
            return (<button onClick={e => this.handleBuy()} className="btn btn-sm btn-primary">buy</button>)
    }

    renderReviews() {
        let { reviews } = this.state;
        return reviews.map((review, idx) => {
            return (
                <Review key={idx} value={review} />
            )
        })
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
                <div>{this.renderReviews()}</div>
            )
            default: return null;
        }
    }
    render() {
        let { value: item, qty } = this.props;
        let { currentTab } = this.state;
        return (
            <div>
                <div className="row">
                    <div className="col-3 col-sm-3 col-md-3">
                        <img src={item.image} className="img-fluid" alt={item.name} />
                    </div>
                    <div className="col-9 col-sm-9 col-md-9">
                        <h5>{item.name}</h5>
                        <h6>&#8377;{item.price}</h6>
                        {/* {item.canBuy ? <button className="btn btn-sm btn-primary">buy</button> : null} */}
                        {this.renderBuyBtn(item)}&nbsp;
                        <input readOnly size="2" value={qty} />
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
        );
    }
}

export default Item;