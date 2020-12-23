import { Project } from "../../models/project.model";

export interface FetchProjectAction {
  type: 'FETCH_PROJECTS',
  payload: Project[];
}

export type ProjectActions = FetchProjectAction;