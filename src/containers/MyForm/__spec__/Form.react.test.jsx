import React from "react";
import {Provider} from "react-redux";
import renderer from "react-test-renderer";
import MyForm from "../MyForm.react.jsx";

describe("MyForm", () => {

	it("should render correctly", () => {

		const mockStore = {
			subscribe: () => {},
			dispatch: () => {},
			getState: () => {}
		};

		const tree = renderer.create(
			<Provider store={ mockStore }>
				<MyForm form="mockFormName"/>
			</Provider>
		).toJSON();

		expect(tree).toMatchSnapshot();
	});
});