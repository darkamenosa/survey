import {
	normalize,
	Schema,
	arrayOf
} from 'normalizr';
import _ from 'lodash';
import {
	GET_SURVEY_REQUEST_SUCCESS,
	GET_SURVEY_REQUEST_ERROR,
	CHANGE_QUESTION,
	CHOOSE_ANSWER,
	FINISH_SURVEY,
	RESET_SURVEY,
} from "../actions/ActionTypes";

const initialState = {
	data: {},
	current: 0,
	values: []
};

// Config normalize state
const questionSchema = new Schema('question', {
	idAttribute: 'id'
});
const answerSchema = new Schema('answer', {
	idAttribute: 'id'
})
questionSchema.define({
	answers: arrayOf(answerSchema)
});

export const reducer = (state = initialState, action) => {
	const prevState = _.cloneDeep(state);
	switch (action.type) {
		case GET_SURVEY_REQUEST_SUCCESS:
			const data = normalize(action.payload, arrayOf(questionSchema));
			return {
				...state,
				data: {...data
				},
				current: data.result.length > 0 ? data.result[0] : 0,
				values: action.payload.map(item => ({
					question: item.id,
					answer: 0
				})),
				isFetching: false
			}
		case CHANGE_QUESTION:
			let {
				current
			} = prevState;
			
			const questionEntity = prevState.data.entities.question;
			let nextIndex = 0;
			const lengthQuestions = Object.keys(questionEntity).length;

			if (action.payload == 'prev') {
				nextIndex = current - 1;
			} else if (action.payload == 'next') {
				nextIndex = current + 1;
			}

			if (nextIndex <= 0) {
				current = lengthQuestions;
			} else if (nextIndex > lengthQuestions) {
				current = 1;
			} else {
				current = nextIndex;
			}

			return {
				...state,
				current: current
			};
		case CHOOSE_ANSWER:
			const item = prevState.values.find(item => item.question == prevState.current);

			item.answer = action.payload;

			return {
				...prevState
			};
		case RESET_SURVEY:
		case FINISH_SURVEY:

			return {
				...prevState,
				current: 1,
				values: prevState.values.map(item => ({...item, answer: 0}))
			};
		default:
			return state;
	}
}