import { createStore } from "redux";
import productReducer from "./reducers/productReducer";
import { devToolsEnhancer } from "@redux-devtools/extension";

const store = createStore(productReducer, devToolsEnhancer());

export default store;
