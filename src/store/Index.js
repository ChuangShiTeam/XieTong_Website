const initialState = {
    list: []
}

function product(state = initialState, action) {
    switch (action.type) {
        case 'Index':
            return Object.assign(initialState, action.data);

        default :
            return state;
    }
}

export default product;