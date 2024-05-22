import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useReducer } from 'react';
import classes from './App.module.scss';
import { AddTodo } from './components/addtodo/AddTodo';
import { Controls } from './components/controls/Controls';
import { ErrorBoundary } from './components/errorboundary/ErrorBoundary';
import { Header } from './components/header/Header';
import { TodosTable } from './components/todos/TodosTable';
import { ControlsContext } from './contexts/ControlsContext';
import { controlsInitialState, controlsStateReducer } from './contexts/controlsStateReducer';
import { TodosList } from './components/todos/TodosList';

const queryClient = new QueryClient();

export default function App() {
  const [controlsState, dispatch] = useReducer(controlsStateReducer, controlsInitialState);

  return (
    <QueryClientProvider client={queryClient}>
      <ControlsContext.Provider value={[controlsState, dispatch]}>
        <main className={classes.main}>
          <ThemeProvider theme={createTheme(controlsState.themeOptions)}>
            <CssBaseline />
            <Header />
            <Controls />
            <ErrorBoundary>
              {controlsState.viewType === 'list' ? <TodosList /> : <TodosTable />}
              <AddTodo />
            </ErrorBoundary>
          </ThemeProvider>
        </main>
      </ControlsContext.Provider>
    </QueryClientProvider>
  );
}
