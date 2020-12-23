import { Project } from '../../models/project.model';
import { ProjectActions } from '../action-types/';

const INITIAL_STATE = { list: { } };
export const projectReducer = (state = INITIAL_STATE, action: ProjectActions) => {
  switch (action.type) {
    case 'FETCH_PROJECTS': {
      const projects = action.payload.reduce((currentState, item) => {
        if (!currentState[item.id]) {
          currentState[item.id] = item;
        }
        return currentState;
      }, {} as { [key: string]: Project });
      return { ...state, list: projects };
    }
    default: {
      return state;
    }
  }
}
