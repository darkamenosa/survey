import React, {Component} from "react";
import {BoxHeader} from "./BoxHeader";
import BoxBody from "./BoxBody";
const Box = (props) => {
	const {title} = props;
	return (
		<div className="panel panel-default">
			{props.children}
		</div>
	)
}
export default Box;
Box.Header = BoxHeader;
Box.Body = BoxBody;