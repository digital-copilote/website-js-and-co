import { combineReducers } from "redux";

import content from "./slices/content/notreActu";
import action from "./slices/content/nosActions";
import socialMedia from "./slices/content/reseauxSociaux";

const rootReducer = combineReducers({ content, action, socialMedia });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
