import {
	SEND_REQUEST,
	RECEIVE_REQUEST,
	GET_SURVEY_REQUEST_SUCCESS,
	GET_SURVEY_REQUEST_ERROR,
	CHANGE_QUESTION,
	CHOOSE_ANSWER,
	FINISH_SURVEY,
	RESET_SURVEY
} from './ActionTypes';
import {createAction} from "./createAction";

export const getSurveys = () => dispatch => {
	dispatch(createAction(SEND_REQUEST));

	setTimeout(function () {
		dispatch(createAction(GET_SURVEY_REQUEST_SUCCESS, data));
		dispatch(createAction(RECEIVE_REQUEST));
	},1000);
}

export const changeQuestion = (direct) => dispatch => {
	dispatch(createAction(CHANGE_QUESTION, direct));
}

export const chooseAnswer = (answer) => dispatch => {
	dispatch(createAction(CHOOSE_ANSWER, answer));
}

export const finishSurvey = () => dispatch => {
	dispatch(createAction(FINISH_SURVEY));
}

export const resetSurvey = () => dispatch => {
	dispatch(createAction(RESET_SURVEY));
}

const data = [
	{
		id: 1,
		content: 'Question 1',
		answers: [
			{
				id: 1,
				content: 'Content of answer 1'
			},
			{
				id: 2,
				content: 'Content of answer 2'
			},
			{
				id: 3,
				content: 'Content of answer 3'
			},
			{
				id: 4,
				content: 'Content of answer 4'
			}
		]
	},
	{
		id:2,
		content: 'Question 2',
		answers: [
			{
				id: 5,
				content: 'Content of answer 5'
			},
			{
				id: 6,
				content: 'Content of answer 6'
			},
			{
				id: 7,
				content: 'Content of answer 7'
			},
			{
				id: 8,
				content: 'Content of answer 8'
			}
		]
	},
	{
		id:3,
		content: 'Question 3',
		answers: [
			{
				id: 9,
				content: 'Content of answer 9'
			},
			{
				id: 10,
				content: 'Content of answer 10'
			},
			{
				id: 11,
				content: 'Content of answer 11'
			},
			{
				id: 12,
				content: 'Content of answer 12'
			}
		]
	}
]
