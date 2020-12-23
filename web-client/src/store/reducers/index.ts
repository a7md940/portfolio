import { combineReducers } from "redux";
import { projectReducer } from "./project.reducer";

export const appReducers = combineReducers({
  projects: projectReducer
})