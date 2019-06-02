import React from 'react';

const CartBadge = (props) => {
    let { value: cart } = props;
    let count = Object.keys(cart).length;
    return (
        <div>
            <i className="fa fa-shopping-cart"></i>
            <span className="badge badge-danger">{count}</span>
            &nbsp;item(s) in cart
        </div>
    );
};

export default CartBadge;