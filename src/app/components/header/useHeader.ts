import { useQuery } from '@tanstack/react-query';
import { ControlsContext } from 'app/model/contexts/ControlsContext';
import todoService from 'app/services/FakeTodoService';
import { useContext } from 'react';

export const useHeader = () => {
  const [, dispatch] = useContext(ControlsContext);

  const { data: todos } = useQuery({
    queryKey: ['todos'],
    queryFn: todoService.getTodos
  });

  const undoneTodoCount = todos?.filter(({ isDone }) => !isDone).length;

  return {
    setTodoFilter: (text: string) => dispatch({ type: 'SET_TODO_FILTER_TEXT', payload: text }),
    undoneTodoCount
  };
};
