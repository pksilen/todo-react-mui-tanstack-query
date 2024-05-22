import { Table } from 'app/common/components/table/Table';
import { Todo } from 'app/model/Todo';
import { PendingTodos } from './PendingTodos';
import { TodoTableRow } from './todo/TodoTableRow';
import { useTodos } from './useTodos';

export const TodosTable = () => {
  const { isPending, shownTodos } = useTodos();

  return (
    <PendingTodos isPending={isPending}>
      <Table>{shownTodos?.map((todo: Todo) => <TodoTableRow key={todo.id} todo={todo} />)}</Table>
    </PendingTodos>
  );
};
