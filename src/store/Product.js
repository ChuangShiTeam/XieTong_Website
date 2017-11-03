const initialState = {
    list: 'asd'
}

function product(state = initialState, action) {
    switch (action.type) {
        case 'product':
            return Object.assign(initialState, action.data);

        default :
            return state;
    }
}

export default product;