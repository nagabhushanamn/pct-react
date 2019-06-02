



export function loadReviews(itemId, size) {
    let reviews = [
        { stars: 1, author: 'author1', body: "bla bla" },
        { stars: 2, author: 'author2', body: "bla bla" },
    ]
    return { type: 'LOAD_REVIEWS', itemId, reviews }
}



export function addNewReview(itemId, review) {
    return { type: 'ADD_NEW_REVIEW', itemId, review }
}
