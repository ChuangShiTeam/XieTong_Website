const initialState = {
    list: []
}

function product(state = initialState, action) {
    switch (action.type) {
        case 'xietong_signup_pupil':
            return Object.assign({}, state, action.data);
        default :
            return state;
    }
}

export default product;