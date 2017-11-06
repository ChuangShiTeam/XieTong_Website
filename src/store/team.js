const initialState = {
    list: []
}

function product(state = initialState, action) {
    switch (action.type) {
        case 'team':
            return Object.assign({}, state, action.data);
        default :
            return state;
    }
}

export default product;