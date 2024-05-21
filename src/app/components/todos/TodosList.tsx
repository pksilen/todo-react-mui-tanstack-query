import { List } from 'app/common/components/list/List';
import { Pending } from 'app/common/components/Pending';
import { Heading4 } from 'app/common/components/typography/Heading4';
import { Todo } from '../../model/Todo';
import { TodoListItem } from './todo/TodoListItem';
import classes from './Todos.module.scss';
import { useTodos } from './useTodos';

export const TodosList = () => {
  const { isPending, shownTodos } = useTodos();

  return (
    <Pending
      className={classes.todos}
      fallback={isPending && <Heading4>Loading todos...</Heading4>}
    >
      <List>{shownTodos?.map((todo: Todo) => <TodoListItem key={todo.id} todo={todo} />)}</List>
    </Pending>
  );
};
