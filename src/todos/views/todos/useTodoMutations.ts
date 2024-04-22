import { useMutation, useQueryClient } from '@tanstack/react-query';
import todoService from '../../services/FakeTodoService';

export default function useTodoMutations(id: string) {
  const queryClient = useQueryClient();

  const editTodoMutation = useMutation({
    mutationFn: (newTitle: string) => todoService.editTodo(id, newTitle),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    }
  });

  const removeTodoMutation = useMutation({
    mutationFn: () => todoService.removeTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    }
  });

  const toggleTodoDoneMutation = useMutation({
    mutationFn: () => todoService.toggleTodoDone(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    }
  });

  return { editTodoMutation, removeTodoMutation, toggleTodoDoneMutation };
}
