import React, {Component} from "react";

export default class BoxBody extends Component {
	render () {
		return (
			<div className="panel-body">
				{this.props.children}
			</div>	
		)
	}
}