/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThemeOptions } from '@mui/material';
import { ControlsState } from './ControlsContext';

const initialThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark'
  },
  typography: {
    body1: {
      fontSize: '16px',
      fontWeight: 300
    },
    fontFamily: ['Neue Haas Grotesk Text', 'sans-serif'].join(','),
    h2: {
      fontWeight: 500,
      letterSpacing: '-0.25rem'
    }
  }
};

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
