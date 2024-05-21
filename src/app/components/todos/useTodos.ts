import { useQuery } from '@tanstack/react-query';
import { isAny } from 'app/common/utils/isAny';
import { ControlsContext } from 'app/contexts/ControlsContext';
import { Todo } from 'app/model/Todo';
import todoService from 'app/services/FakeTodoService';
import { useContext } from 'react';

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
