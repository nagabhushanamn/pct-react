import React from 'react';

let total = 0.0;

function renderCartItems(cart) {
    let keys = Object.keys(cart);
    return keys.map((key, idx) => {
        let itemLine = cart[key];
        let { item, qty } = itemLine;
        total += qty * item.price;
        return (
            <tr key={idx}>
                <td>{item.name}</td>
                <td>&#8377;{item.price}</td>
                <td>{qty}</td>
                <td>&#8377;{qty * item.price}</td>
            </tr>
        )
    })
}

const CartView = (props) => {
    let { value: cart } = props;
    return (
        <div className="card">
            <div className="card-header">Item(s) in cart </div>
            <div className="card-body">
                <table className="table table-sm table-bordered">
                    <tbody>
                        {renderCartItems(cart)}
                    </tbody>
                </table>
                <hr />
                Total :&#8377; {total}
                <hr />
                <button className="btn btn-primary">checkout</button>
            </div>
        </div>
    );
};

export default CartView;