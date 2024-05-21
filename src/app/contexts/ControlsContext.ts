import { ThemeOptions } from '@mui/material';
import { createContext, Dispatch } from 'react';

export type ViewType = 'list' | 'table';

export type ControlsState = {
  shouldShowUndoneTodosOnly: boolean;
  themeOptions: ThemeOptions;
  lowerCaseTodoFilterText: string;
  viewType: ViewType;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ControlsContext = createContext<[ControlsState, Dispatch<any>]>(null as any);
