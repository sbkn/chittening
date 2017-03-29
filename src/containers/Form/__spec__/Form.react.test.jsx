import React from "react";
import {Provider} from "react-redux";
import renderer from "react-test-renderer";
import Form from "../Form.react.jsx";

describe("Form", () => {

	it("should render correctly", () => {

		const mockStore = {
			subscribe: () => {},
			dispatch: () => {},
			getState: () => {}
		};

		const tree = renderer.create(
			<Provider store={ mockStore }>
				<Form form="mockFormName"/>
			</Provider>
		).toJSON();

		expect(tree).toMatchSnapshot();
	});
});