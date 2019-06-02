



export function cartReducer(state = {}, action) {
    // console.log("-cart reducer-");
    let { type } = action;
    switch (type) {
        case 'BUY': {
            let { item, qty } = action;
            qty = qty || 1
            let { id } = item;
            let itemLine;
            if (state[id]) {
                itemLine = state[id];
                itemLine = { ...itemLine, qty: itemLine.qty + qty }
                if (itemLine.qty === 0) {
                    delete state[id];
                    return { ...state };
                }
            } else {
                itemLine = { item, qty: 1 }
            }
            return { ...state, [id]: itemLine }
        }
        default:
            return state;
    }
}
