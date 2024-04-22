import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Checkbox, IconButton, TableCell, TableRow } from '@mui/material';
import { Todo } from '../../model/Todo';
import useTodoMutations from './useTodoMutations';

type Props = {
  todo: Todo;
};

export default function TodoTableRow({ todo: { id, title, isDone } }: Props) {
  const { editTodoMutation, removeTodoMutation, toggleTodoDoneMutation } =
    useTodoMutations(id);

  return (
    <TableRow>
      <TableCell>
        <Checkbox
          checked={isDone}
          color="success"
          onChange={() => toggleTodoDoneMutation.mutate()}
        />
      </TableCell>
      <TableCell
        sx={{ flexGrow: 1, textDecoration: isDone ? 'line-through' : '' }}
      >
        {title}
      </TableCell>
      <TableCell align="right">
        <IconButton onClick={() => editTodoMutation.mutate(title + ' edited')}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => removeTodoMutation.mutate()}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
