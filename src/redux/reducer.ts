import { combineReducers } from "redux";

import content from "./slices/homePage/notreActu";
import action from "./slices/homePage/nosActions";
import socialMedia from "./slices/homePage/reseauxSociaux";
import partners from "./slices/homePage/nosPartenaires";
import aboutUs from "./slices/aboutUs/quiSommmesNous";
import members from "./slices/members/members";
import footer from "./slices/footer";
const rootReducer = combineReducers({
    content,
    action,
    socialMedia,
    partners,
    aboutUs,
    members,
    footer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
