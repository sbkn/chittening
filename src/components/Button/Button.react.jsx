import React from "react";

const Button = (props) => (
	<button type={props.type || "button"} onClick={props.onClick}>
		Click me
	</button>
);

Button.propTypes = {
	onClick: React.PropTypes.func,
	type: React.PropTypes.string
};

export default Button;
