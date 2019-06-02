import React from 'react';

import { connect } from 'react-redux'

const CartBadge = (props) => {
    let { cart } = props;
    let count = Object.keys(cart).length;
    return (
        <div>
            <i className="fa fa-shopping-cart"></i>
            <span className="badge badge-danger">{count}</span>
            &nbsp;item(s) in cart
        </div>
    );
};

// export default CartBadge;

function mapStateToPros(state) {
    return {
        cart: state.cart || {}
    }
}

export default connect(mapStateToPros, null)(CartBadge)

