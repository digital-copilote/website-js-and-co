import { combineReducers } from "redux";

import content from "./slices/homePage/notreActu";
import action from "./slices/homePage/nosActions";
import socialMedia from "./slices/homePage/reseauxSociaux";
import partners from "./slices/homePage/nosPartenaires";
import newMember from "./slices/homePage/nouveauMembres";
import aboutUs from "./slices/aboutUs/quiSommmesNous";
import members from "./slices/members/members";
const rootReducer = combineReducers({
    content,
    action,
    socialMedia,
    partners,
    newMember,
    aboutUs,
    members,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
