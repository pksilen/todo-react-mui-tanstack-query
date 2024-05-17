import { Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import ViewControlsContext from '../../contexts/ViewControlsContext';
import { Todo } from '../../model/Todo';
import todoService from '../../services/FakeTodoService';
import classNames from './Todos.module.scss';
import TodosViewFactory from './TodosViewFactory';

export default function Todos() {
  const [{ shouldShowUndoneTodosOnly, lowerCaseTodoFilterText, viewType }] =
    useContext(ViewControlsContext);

  const { data, isLoading } = useQuery({
    queryKey: ['todos'],
    queryFn: todoService.getTodos
  });

  const todoListItems = data
    ?.filter(({ title }) =>
      title.toLowerCase().includes(lowerCaseTodoFilterText)
    )
    .filter(
      ({ isDone }) =>
        (shouldShowUndoneTodosOnly && !isDone) || !shouldShowUndoneTodosOnly
    )
    .map((todo: Todo) => TodosViewFactory.createTodoView(viewType, todo));

  return (
    <div className={classNames.container}>
      {isLoading ? (
        <Typography variant="h4">Loading todos...</Typography>
      ) : (
        TodosViewFactory.createTodosView(viewType, todoListItems)
      )}
    </div>
  );
}
