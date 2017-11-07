const initialState = {
	article_list: [],
	student_list: []
}

function product(state = initialState, action) {
	switch (action.type) {
		case 'xxb':
			return Object.assign({}, state, action.data);

		default :
			return state;
	}
}

export default product;