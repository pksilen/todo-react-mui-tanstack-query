import { Pending } from 'app/common/components/Pending';
import { Table } from 'app/common/components/table/Table';
import { Heading4 } from 'app/common/components/typography/Heading4';
import { Todo } from 'app/model/Todo';
import { TodoTableRow } from './todo/TodoTableRow';
import classes from './Todos.module.scss';
import { useTodos } from './useTodos';

export const TodosTable = () => {
  const { isPending, shownTodos } = useTodos();

  return (
    <Pending
      className={classes.todos}
      fallback={isPending && <Heading4>Loading todos...</Heading4>}
    >
      <Table>{shownTodos?.map((todo: Todo) => <TodoTableRow key={todo.id} todo={todo} />)}</Table>
    </Pending>
  );
};
