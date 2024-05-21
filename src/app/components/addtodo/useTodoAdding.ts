import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import todoService from '../../services/FakeTodoService';

export const useTodoAdding = () => {
  const [todoTitle, setTodoTitle] = useState('');
  const queryClient = useQueryClient();

  const addTodoMutation = useMutation({
    mutationFn: (todoTitle: string) => todoService.addTodo(todoTitle),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    }
  });

  const maybeAddTodo = () => {
    if (todoTitle) {
      addTodoMutation.mutate(todoTitle);
      setTodoTitle('');
    }
  };

  return {
    maybeAddTodo,
    setTodoTitle,
    todoTitle
  };
};
