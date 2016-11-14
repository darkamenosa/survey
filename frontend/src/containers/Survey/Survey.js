import React, {Component} from "react";
import Box from "components/Box";
import Button from "components/Button";

export default class Survey extends Component {
	constructor () {
		super(...arguments);
		this.renderQuestion = this.renderQuestion.bind(this);
		this.renderAnswer = this.renderAnswer.bind(this);
		this.change = this.change.bind(this);
		this.renderButtonFn = this.renderButtonFn.bind(this);
	}

	componentDidMount () {
		this.props.getSurveys();
	}
	
	renderQuestion () {
		const {current, data:{result, entities}} = this.props;
		if (current && current > 0) {
			const currentQuestion = entities.question[current];
			return (
				<Box.Header title={currentQuestion.content} />
			)
		} else {
			return <Box.Header title="Đang lấy câu hỏi ..."/>
		}
	}

	renderAnswer () {
		const {current, data:{result, entities}, values} = this.props;
		const {chooseAnswer} = this.props;
		if (current && current > 0) {
			const {question, answer} = entities;
			const currentQuestion = question[current];
			const listAnswer = currentQuestion.answers.map(item => {
				return {
					...answer[item]
				}
			})
			const renderContent = (item, index) => {
				const el = values.find(i => i.question == current);
				return  (
					<div className="radio radio-danger" key={`AN_${item.id}`}
						onClick={() => {
							chooseAnswer(item.id);
						}}
					>
						<input type="radio" name="radio1" id="radio1" value={item.id}
							onChange={() => {}}
							checked={el.answer == item.id ? 'checked' : ''}
						/>
						<label>
	              {item.content}
	           </label>
					</div>		
				)
			}
			return (
				<Box.Body>
					<div className="col-xs-12">
						{listAnswer.map(renderContent)}
					</div>
				</Box.Body>
			)
		} else {
			return 
				<Box.Body>
					<div className="col-xs-12">
						Đang lấy câu trả lời ...
					</div>
				</Box.Body>
		}
	}

	change (direct) {
		const {changeQuestion} = this.props;
		if (direct) {
			changeQuestion(direct);
		}
	}

	renderButtonFn () {
		const {current, values, finishSurvey, resetSurvey} = this.props;
		const ResetButton = () => (
			<div className="col-xs-12 btn btn-default"
				onClick={() => resetSurvey()}
			>
						Bắt đầu lại
			</div>
		)
		const FinishButton = () => (
			<div className="col-xs-12 btn btn-primary"
				onClick={() => finishSurvey()}
			>
						Hoàn thành
			</div>		
		)
		if (current && values.every(item => item.answer > 0)) {
			return ( 
				<div className="row">
					<ResetButton />
					<FinishButton />		
				</div>	
			)
		} else {
			return ( 
				<div className="row">
					<ResetButton />
				</div>	
			)
		}

		
	}

	render () {
		return (
			<div className="container">
				{
					(!this.props.isFetching) &&
					<div className="row">
						<div className="col-sm-1 col-xs-12 text-center">
							<Button 
								icon="left"
								handleClick={() => {
									this.change('prev')
								}}
							/>
						</div>
						<div className="col-sm-10 col-xs-12">
							<Box>
								{this.renderQuestion()}
								{this.renderAnswer()}
							</Box>
							{this.renderButtonFn()}
						</div>
						<div className="col-sm-1 col-xs-12 text-center">
							<Button 
								handleClick={() => {
									this.change('next')
								}}
								icon="right"/>
						</div>
					</div>
				}
			</div>
		)
	}
}
