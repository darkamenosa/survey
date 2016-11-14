import {
	SEND_REQUEST,
	RECEIVE_REQUEST
} from "../actions/ActionTypes";

const initalState = {
	isFetching: false
};

export const reducer = (state = initalState, action) => {
	switch (action.type) {
		case SEND_REQUEST:
			return {
				...state,
				isFetching: true
			};
		case RECEIVE_REQUEST:
			return {
				...state,
				isFetching: false
			};
		default :
			return state;
	}
}