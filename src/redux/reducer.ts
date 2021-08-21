import { combineReducers } from "redux";

import content from "./slices/content/notreActu";
import action from "./slices/content/nosActions";
import socialMedia from "./slices/content/reseauxSociaux";
import partners from "./slices/content/nosPartenaires";
import newMember from "./slices/content/nouveauMembres";

const rootReducer = combineReducers({
    content,
    action,
    socialMedia,
    partners,
    newMember,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
