import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { isAny } from '../../common/utils/isAny';
import { ControlsContext } from '../../contexts/ControlsContext';
import { Todo } from '../../model/Todo';
import todoService from '../../services/FakeTodoService';

export const useTodos = () => {
  const [{ lowerCaseTodoFilterText, shouldShowUndoneTodosOnly }] = useContext(ControlsContext);

  const { data: todos, isPending } = useQuery({
    queryKey: ['todos'],
    queryFn: todoService.getTodos
  });

  const titleContainsTodoFilterText = ({ title }: Todo) =>
    title.toLowerCase().includes(lowerCaseTodoFilterText);

  const isUndone = ({ isDone }: Todo) => !isDone;

  const shownTodos = todos
    ?.filter(titleContainsTodoFilterText)
    .filter(shouldShowUndoneTodosOnly ? isUndone : isAny);

  return {
    isPending,
    shownTodos
  };
};
