import { Project } from "../../models/project.model";

export * from './project.action.types';

export interface RootState {
  projects: { [key: string]: Project };
}

