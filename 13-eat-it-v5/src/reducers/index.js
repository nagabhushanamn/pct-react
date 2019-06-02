


import { itemsReducer } from './items'
import { reviewsReducer } from './reviews'
import { cartReducer } from './cart'
import { reqStatusReducer } from './req-status'

import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    items: itemsReducer,
    reviews: reviewsReducer,
    cart: cartReducer,
    reqStatus: reqStatusReducer
})

export default rootReducer;