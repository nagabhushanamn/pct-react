


import { itemsReducer } from './items'
import { reviewsReducer } from './reviews'
import { cartReducer } from './cart'

import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    items: itemsReducer,
    reviews:reviewsReducer,
    cart:cartReducer
})

export default rootReducer;