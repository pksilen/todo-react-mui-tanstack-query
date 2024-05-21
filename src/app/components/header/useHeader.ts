import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { ControlsContext } from '../../contexts/ControlsContext';
import todoService from '../../services/FakeTodoService';

export const useHeader = () => {
  const [, dispatch] = useContext(ControlsContext);

  const { data: todos } = useQuery({
    queryKey: ['todos'],
    queryFn: todoService.getTodos
  });

  const undoneTodoCount = todos?.filter(({ isDone }) => !isDone).length;

  return { dispatch, undoneTodoCount };
};
