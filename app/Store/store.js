import { configureStore } from "@reduxjs/toolkit";
import navLinkReducer from "./slices/add";
import getTeamReducer from "./slices/team";

export default configureStore({
  reducer: {
    navLinks: navLinkReducer,
    getTeams: getTeamReducer,
  },
});
