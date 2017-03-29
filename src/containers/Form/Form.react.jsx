import React, {Component} from "react";
import {Field, reduxForm} from "redux-form/immutable";
import Button from "../../components/Button/Button.react.jsx";

const renderInput = ({input, type, label}) => (
	<div>
		<label>{label}</label>
		<input {...input} type={type}/>
	</div>
);

class Form extends Component {

	render() {
		return (
			<form onSubmit={() => this.props.handleSubmit(() => {})}>

				<Field name="fieldUsername"
				       type="text"
				       label="username"
				       component={renderInput}
				/>

				<Field name="fieldPassword"
				       type="password"
				       label="password"
				       component={renderInput}
				/>

				<Button type="button" onClick={() => this.props.handleSubmit(() => {})}/>

			</form>
		)
	}
}


export default reduxForm()(Form);
