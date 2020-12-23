import { Dispatch } from "react";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import projectApi from "../../api/project.api"
import { Project } from "../../models/project.model";
import { RootState } from "../action-types";
interface FetchProjectsAction {
  payload: Project[];
  type: 'FETCH_PROJECTS';
}
export const fetchProjects = (): ThunkAction<void, RootState, unknown, Action<Project[]>> => {
  return async (dispatch: Dispatch<FetchProjectsAction>, getState: () => RootState) => {
    const { data } = await projectApi.get<Project[]>('');
    dispatch({ type: 'FETCH_PROJECTS', payload: data });
  }
}