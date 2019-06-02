




export function itemsReducer(state = [], action) {
    // console.log("-items reducer-");
    let { type } = action;
    switch (type) {
        case 'LOAD_ITEMS': {
            let { items } = action;
            return [...items, ...state]
        }
        // case 'BUY': {
        //     let { item } = action;
        //     return state.filter(i => i.id !== item.id)
        // }
        default: {
            return state;
        }
    }
}