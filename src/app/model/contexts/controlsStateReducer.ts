/* eslint-disable @typescript-eslint/no-explicit-any */
import { ControlsState } from './ControlsContext';
import { initialThemeOptions } from './initialThemeOptions';

export const controlsInitialState: ControlsState = {
  shouldShowUndoneTodosOnly: false,
  themeOptions: initialThemeOptions,
  lowerCaseTodoFilterText: '',
  viewType: 'list'
};

export const controlsStateReducer = (previousState: ControlsState, action: any): ControlsState => {
  switch (action.type) {
    case 'TOGGLE_SHOULD_SHOW_UNDONE_TODOS_ONLY':
      return {
        ...previousState,
        shouldShowUndoneTodosOnly: !previousState.shouldShowUndoneTodosOnly
      };
    case 'SET_TODO_FILTER_TEXT':
      return {
        ...previousState,
        lowerCaseTodoFilterText: action.payload.toLowerCase()
      };
    case 'SET_VIEW_MODE':
      return {
        ...previousState,
        themeOptions: {
          ...initialThemeOptions,
          palette: { mode: action.payload }
        }
      };
    case 'SET_VIEW_TYPE':
      return {
        ...previousState,
        viewType: action.payload
      };
    default:
      return previousState;
  }
};
