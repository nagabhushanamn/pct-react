

import api from '../api'

export function loadReviews(itemId, size) {
    // let reviews = [
    //     { stars: 1, author: 'author1', body: "bla bla" },
    //     { stars: 2, author: 'author2', body: "bla bla" },
    // ]
    // return { type: 'LOAD_REVIEWS', itemId, reviews }

    return function (dispatch) {
        api
            .loadReviews(itemId, size)
            .then(response => {
                dispatch({ type: 'LOAD_REVIEWS', itemId, reviews: response.data }) // Async Action
            })
    }

}



export function addNewReview(itemId, review) {
    // return { type: 'ADD_NEW_REVIEW', itemId, review }
    return function (dispatch) {
        api
            .addNewReview(itemId, review)
            .then(response => {
                dispatch({type: 'ADD_NEW_REVIEW', itemId, review: response.data }) // Async Action
            })
    }
}
