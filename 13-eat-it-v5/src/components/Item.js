import React, { Component } from 'react';
import classNames from 'classnames';
import Review from './Review';

import ReviewForm from './ReviewForm';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadReviews, addNewReview } from '../actions/reviews'
import { buy } from '../actions/cart'

class Item extends Component {

    state = {
        currentTab: 1,
    }

    changeTab(e, tabIndex) {
        e.preventDefault();
        this.setState({ currentTab: tabIndex }, () => {
            if (tabIndex === 3) {
                let { value: item, actions } = this.props;
                actions.loadReviews(item.id)
            }
        })
    }

    handleBuy() {
        let { value: item, actions } = this.props;
        actions.buy(item, 1)
    }

    renderBuyBtn(item) {
        if (item.canBuy)
            return (<button onClick={e => this.handleBuy()} className="btn btn-sm btn-primary">buy</button>)
    }

    renderReviews() {
        let { reviews } = this.props;
        return reviews.map((review, idx) => {
            return (
                <Review key={idx} value={review} />
            )
        })
    }

    addNewReview(review) {
        let { value: item, actions } = this.props;
        actions.addNewReview(item.id, review)
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
                <div>
                    {this.renderReviews()}
                    <ReviewForm onSubmit={review => this.addNewReview(review)} />
                </div>
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

// export default Item;

function mapStateToProps(state, props) {
    return {
        reviews: state.reviews[props.value.id] || []
    }
}
function mapDispathToProps(dispatch) {
    return {
        actions: bindActionCreators({ loadReviews, addNewReview, buy }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Item)