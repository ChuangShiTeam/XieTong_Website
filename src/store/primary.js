const initialState = {
    organization_id: '6fd70c5e490e403b844ca722e0a5d756',
    teacher_list: [],
    teacher_list_2: [],
    student_list: [],
    article_list: []
};

function product(state = initialState, action) {
    switch (action.type) {
        case 'primary':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default product;