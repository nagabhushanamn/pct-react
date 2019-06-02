
import React, { Component } from 'react';
import Item from './Item';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadItems } from '../actions/items'

class ItemList extends Component {

    componentDidMount() {
        let { actions } = this.props;
        actions.loadItems('food', 20)
    }

    renderItems() {
        let { items } = this.props;
        let { cart } = this.props;
        return items.map((item, idx) => {
            let itemLine = cart[item.id] || {}
            let qty = itemLine.qty || 0;
            return (
                <div key={idx} className="list-group-item">
                    <Item value={item} qty={qty} onBuy={item => this.props.onBuy(item)} />
                </div>
            )
        })
    }
    renderReqStatus() {
        let { reqStatus } = this.props;
        if (reqStatus.message) {
            return (
                <div className="alert alert-warning">{reqStatus.message}</div>
            )
        }
    }
    render() {
        return (
            <div>
                <hr />
                {this.renderReqStatus()}
                <hr />
                {this.renderItems()}
            </div>
        );
    }
}

// export default ItemList;

function mapStateToProps(state) {
    return {
        cart: state.cart || {},
        items: state.items || [],
        reqStatus: state.reqStatus
    }
}
function mapDispathToProps(dispatch) {
    return {
        actions: bindActionCreators({ loadItems }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispathToProps)(ItemList)