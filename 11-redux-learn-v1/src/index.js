console.log("-index.js-");


import 'bootstrap/dist/css/bootstrap.css';

import store from './store'

import { loadItems } from './actions/items'
import { loadReviews, addNewReview } from './actions/reviews'
import { buy } from './actions/cart'



//------------------------------------------
// App-component ( plain-js | NG | React)
//------------------------------------------

store.subscribe(() => {
    let cart = store.getState().cart;
    // render the new-state
    console.log(cart);
});

//-------------------------------------------

//------------------------------------------
// ItemList-component ( plain-js | NG | React)
//------------------------------------------

store.subscribe(() => {
    let items = store.getState().items;
    // render the new-state
    console.log(items);
});

//-------------------------------------------


//------------------------------------------
// Item ( plain-js | NG | React)
//------------------------------------------
// 111 - Item
store.subscribe(() => {
    let reviews = store.getState().reviews['111'];
    // render the new-state
    console.log(reviews);
});

// 222 - Item
store.subscribe(() => {
    let reviews = store.getState().reviews['222'];
    // render the new-state
    console.log(reviews);
});
//-------------------------------------------




setTimeout(() => {
    let action = loadItems('food', 2);
    store.dispatch(action);
    setTimeout(() => {
        let action = loadReviews('111', 10)
        store.dispatch(action);
        setTimeout(() => {
            let action = buy({ id: 111 }, 1)
            store.dispatch(action);
            setTimeout(() => {
                let action = addNewReview('222', { stars: 1, author: '', body: '' })
                store.dispatch(action);
            }, 2000);
        }, 2000);
    }, 2000);
}, 2000)
