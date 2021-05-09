import counterReduce from "./counter";
import loggedIn from "./logged";

import { combineReducers } from "redux";

export default combineReducers({
  counterReduce: counterReduce,
  loggedIn: loggedIn,
});
