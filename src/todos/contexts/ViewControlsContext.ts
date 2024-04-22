/* eslint-disable @typescript-eslint/no-explicit-any */
import {ThemeOptions} from '@mui/material';
import {createContext, Dispatch} from 'react';

export type ViewType = 'list' | 'table';

export type ViewControlsState = {
  shouldShowUndoneTodosOnly: boolean;
  themeOptions: ThemeOptions;
  lowerCaseTodoFilterText: string;
  viewType: ViewType;
};

const ViewControlsContext = createContext<[ViewControlsState, Dispatch<any>]>(
  null as any
);
export default ViewControlsContext;
