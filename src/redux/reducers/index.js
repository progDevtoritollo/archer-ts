import { combineReducers } from "redux";

import user from "./user";
import club from "./club";

const rootReducer = combineReducers({
  user,
  club,
});

export default rootReducer;
