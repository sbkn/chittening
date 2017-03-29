import React from "react";
import {applyMiddleware, createStore, compose} from "redux";
import {combineReducers} from "redux-immutable";
import {Provider} from "react-redux";
import {reducer as formReducer} from "redux-form/immutable";
import {Map} from "immutable";
import Form from "../Form/Form.react.jsx";

const reducers = {
	form: formReducer
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware();

const initialState = Map();
const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, initialState, composeEnhancers(middleware));

const App = () => (
	<Provider store={ store }>
		<Form form="someFormName"/>
	</Provider>
);

export default App;

