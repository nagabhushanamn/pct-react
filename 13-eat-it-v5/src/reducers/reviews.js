

/*
{
    "111":[
        {},{}
    ],
     "222":[
        {},{},{}
    ]
}
*/


export function reviewsReducer(state = {}, action) {
    // console.log("-reviews reducer-");
    let { type } = action;
    switch (type) {
        case 'LOAD_REVIEWS': {
            let { itemId, reviews } = action;
            let prevReviews = state[itemId] || []
            reviews = [...prevReviews, ...reviews]
            return { ...state, [itemId]: reviews }
        }
        case 'ADD_NEW_REVIEW': {
            let { itemId, review } = action;
            let prevReviews = state[itemId] || []
            let reviews = [...prevReviews, review]
            return { ...state, [itemId]: reviews }
        }
        default: {
            return state;
        }
    }
}
