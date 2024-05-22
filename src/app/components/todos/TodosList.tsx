import { List } from 'app/common/components/list/List';
import { Todo } from 'app/model/Todo';
import { PendingTodos } from './PendingTodos';
import { TodoListItem } from './todo/TodoListItem';
import { useTodos } from './useTodos';

export const TodosList = () => {
  const { isPending, shownTodos } = useTodos();

  return (
    <PendingTodos isPending={isPending}>
      <List>{shownTodos?.map((todo: Todo) => <TodoListItem key={todo.id} todo={todo} />)}</List>
    </PendingTodos>
  );
};
