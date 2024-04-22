import { Button, TextField } from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import todoService from '../../services/FakeTodoService';
import classNames from './AddTodo.module.scss';

export default function AddTodo() {
  const [todoTitle, setTodoTitle] = useState('');
  const queryClient = useQueryClient();

  const addTodoMutation = useMutation({
    mutationFn: (todoTitle: string) => todoService.addTodo(todoTitle),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    }
  });

  function maybeAddTodo() {
    if (todoTitle) {
      addTodoMutation.mutate(todoTitle);
      setTodoTitle('');
    }
  }

  return (
    <div className={classNames.container}>
      <TextField
        id="addtodo"
        fullWidth
        label="Add new todo..."
        onChange={(event) => setTodoTitle(event.target.value)}
        value={todoTitle}
        variant="standard"
      />
      <Button
        color="primary"
        onClick={maybeAddTodo}
        variant="contained"
        sx={{ flexShrink: 0, marginLeft: '25px' }}
      >
        Add todo
      </Button>
    </div>
  );
}
