const initialState = {
    organization_id: '6fd70c5e490e403b844ca722e0a5d756',
    article_list: [],
    student_list: []
};

function product(state = initialState, action) {
    switch (action.type) {
        case 'junior':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default product;