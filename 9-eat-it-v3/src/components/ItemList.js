
import React, { Component } from 'react';
import Item from './Item';


class ItemList extends Component {

    state = {
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


    renderItems() {
        let { items } = this.state;
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

    render() {
        return (
            <div>
                {this.renderItems()}
            </div>
        );
    }
}

export default ItemList;