import React, {Component} from "react";
import {Field, reduxForm} from "redux-form/immutable";
import Button from "../../components/Button/Button.react.jsx";

const renderInput = ({input, type, label}) => (
	<div>
		<label>{label}</label>
		<input {...input} type={type}/>
	</div>
);

renderInput.propTypes = {
	input: React.PropTypes.object.isRequired,
	type: React.PropTypes.string.isRequired,
	label: React.PropTypes.string
};

class MyForm extends Component {

	render() {

		const { handleSubmit } = this.props;

		return (
			<form onSubmit={() => handleSubmit(() => {})}>

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

				<Button type="button"
						onClick={() => handleSubmit(() => {})}
				/>

			</form>
		)
	}
}

MyForm.propTypes = {
	form: React.PropTypes.string.isRequired,
	handleSubmit: React.PropTypes.func.isRequired
};

export default reduxForm()(MyForm);
