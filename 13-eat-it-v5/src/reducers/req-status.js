


export function reqStatusReducer(state = {}, action) {
    switch (action.type) {
        case 'REQUEST_BEGIN': {
            let { message } = action;
            return { message }
        }
        case 'REQUEST_FINISHED': {
            let { message } = action;
            return { message }
        }
        case 'REQUEST_ERROR': {
            let { message } = action;
            return { message }
        }
        default:
            return state;

    }
}