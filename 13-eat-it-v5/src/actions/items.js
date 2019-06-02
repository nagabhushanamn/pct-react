
import api from '../api';

export function loadItems(food, size) {

    // let items = [
    //     { id: 111, name: 'item-1', price: 100 },
    //     { id: 222, name: 'item-2', price: 200 }
    // ]
    // return { type: 'LOAD_ITEMS', items } // sync action

    return function (dispatch) {
        dispatch({ type: 'REQUEST_BEGIN', message: 'Loading Items...' }) // Async Action
        api
            .loadItems(food, size)
            .then(response => {
                dispatch({ type: 'REQUEST_FINISHED', message: '' }) // Async Action
                dispatch({ type: 'LOAD_ITEMS', items: response.data }) // Async Action
            })
            .catch(error => {
                dispatch({ type: 'REQUEST_ERROR', message: error.message }) // Async Action
            })
    }

}