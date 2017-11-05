const initialState = {
    list: [],
    item: '123'
}

function product(state = initialState, action) {
    switch (action.type) {
        case 'article':
            return Object.assign({}, state, action.data);
        default :
            return state;
    }
}

export default product;