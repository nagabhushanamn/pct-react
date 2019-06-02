
import React, { Component } from 'react';
import Item from './Item';

import api from '../api'


class ItemList extends Component {

    state = {
        items: []
    } 

    componentDidMount() {
        api
            .loadItems()
            .then(response => {
                this.setState({ items: response.data })
            })
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