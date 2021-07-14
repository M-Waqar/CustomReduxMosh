import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import Reducer from "./Reducer";

const store = createStore(Reducer, devToolsEnhancer({ trace: true }));

export default store;
