import { TaskAlt } from '@mui/icons-material';
import { Button, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Todo } from '../../model/Todo';
import useTodoMutations from './useTodoMutations';

type Props = {
  todo: Todo;
};

export default function TodoListItem({ todo: { id, title, isDone } }: Props) {
  const { editTodoMutation, removeTodoMutation, toggleTodoDoneMutation } =
    useTodoMutations(id);

  return (
    <ListItem sx={{ display: 'flex' }}>
      <ListItemIcon>
        <TaskAlt color={isDone ? 'success' : 'error'} />
      </ListItemIcon>
      <ListItemText
        primary={title}
        sx={{ textDecoration: isDone ? 'line-through' : '' }}
      />
      <Button
        onClick={() => toggleTodoDoneMutation.mutate()}
        sx={{ flexShrink: 0 }}
      >
        {isDone ? 'Mark undone' : 'Mark done'}
      </Button>
      <Button
        onClick={() => editTodoMutation.mutate(title + ' edited')}
        sx={{ flexShrink: 0 }}
      >
        Edit
      </Button>
      <Button
        onClick={() => removeTodoMutation.mutate()}
        sx={{ flexShrink: 0 }}
      >
        Remove
      </Button>
    </ListItem>
  );
}
