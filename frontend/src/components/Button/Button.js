import React, {Component} from 'react';

export const Button = ({icon = 'left', handleClick}) => {
	return (
		<a href="#" 
			onClick={(e) => {
				e.preventDefault();
				handleClick();
			}}
		>
				<i className={`fa fa-angle-${icon}`} style={{zoom: 8}}></i>
		</a>
	);
}
