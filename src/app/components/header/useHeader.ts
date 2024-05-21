import { useQuery } from '@tanstack/react-query';
import { ControlsContext } from 'app/contexts/ControlsContext';
import todoService from 'app/services/FakeTodoService';
import { useContext } from 'react';

export const useHeader = () => {
  const [, dispatch] = useContext(ControlsContext);

  const { data: todos } = useQuery({
    queryKey: ['todos'],
    queryFn: todoService.getTodos
  });

  const undoneTodoCount = todos?.filter(({ isDone }) => !isDone).length;

  return { dispatch, undoneTodoCount };
};
