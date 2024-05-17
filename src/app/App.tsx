import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useReducer } from 'react';
import ViewControlsContext from '../todos/contexts/ControlsContext';
import viewControlsStateReducer, {
  viewControlsInitialState
} from '../todos/contexts/viewControlsStateReducer';
import AddTodo from '../todos/views/addtodo/AddTodo';
import ErrorCatcher from '../todos/views/errorcatcher/ErrorCatcher';
import Header from '../todos/views/header/Header';
import Todos from '../todos/views/todos/Todos';
import ViewControls from '../todos/views/viewcontrols/ViewControls';
import classNames from './App.module.scss';

const queryClient = new QueryClient();

export default function App() {
  const [viewControlsState, dispatch] = useReducer(
    viewControlsStateReducer,
    viewControlsInitialState
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ViewControlsContext.Provider value={[viewControlsState, dispatch]}>
        <div className={classNames.container}>
          <ThemeProvider theme={createTheme(viewControlsState.themeOptions)}>
            <CssBaseline />
            <Header />
            <ViewControls />
            <ErrorCatcher>
              <Todos />
              <AddTodo />
            </ErrorCatcher>
          </ThemeProvider>
        </div>
      </ViewControlsContext.Provider>
    </QueryClientProvider>
  );
}
