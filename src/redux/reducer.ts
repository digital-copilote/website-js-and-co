import { combineReducers } from "redux";

import content from "./slices/content";

const rootReducer = combineReducers({ content });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
