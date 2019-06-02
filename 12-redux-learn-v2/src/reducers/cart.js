



export function cartReducer(state = {}, action) {
    console.log("-cart reducer-");
    let { type } = action;
    switch (type) {
        case 'BUY': {
            let { item, qty } = action;
            let { id } = item;
            let itemLine;
            if (state[id]) {
                itemLine = state[id];
                itemLine = { ...itemLine, qty: itemLine.qty + 1 }
            } else {
                itemLine = { item, qty: 1 }
            }
            return { ...state, [id]: itemLine }
        }
        default:
            return state;
    }
}
