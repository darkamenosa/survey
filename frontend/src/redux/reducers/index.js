import {combineReducers} from "redux";
import {reducer as globalReducer} from "./globalReducer";
import {reducer as surveyReducer} from "./surveyReducer";

const reducer = combineReducers({
	global: globalReducer,
	survey: surveyReducer
});

export default reducer;