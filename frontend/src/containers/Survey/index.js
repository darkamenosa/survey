import {connect} from "react-redux"

import {getSurveys, changeQuestion, chooseAnswer, finishSurvey, resetSurvey} from '_redux/actions/surveyActions';

import Survey from "./Survey";

const mapStateToProps = (state) => ({
	data: state.survey.data,
	current: state.survey.current,
	values: state.survey.values
});

export default connect(mapStateToProps, {
	getSurveys,
	changeQuestion,
	chooseAnswer,
	finishSurvey,
	resetSurvey
})(Survey);