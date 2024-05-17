/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThemeOptions } from '@mui/material';
import { createContext, Dispatch } from 'react';

export type ViewType = 'list' | 'table';

export type ControlsState = {
  shouldShowUndoneTodosOnly: boolean;
  themeOptions: ThemeOptions;
  lowerCaseTodoFilterText: string;
  viewType: ViewType;
};

export const ControlsContext = createContext<[ControlsState, Dispatch<any>]>(null as any);
