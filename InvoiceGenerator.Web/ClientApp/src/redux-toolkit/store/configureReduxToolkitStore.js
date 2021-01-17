import rootReducer from "../../redux-legacy/reducers";
import { configureStore } from "@reduxjs/toolkit";


export default function configureReduxToolkitStore() {
	return configureStore({
		reducer: rootReducer,
	});
}