import { Todo } from '../model/Todo';

export interface TodoService {
  addTodo(title: string): Promise<void>;

  getTodos(): Promise<Todo[]>;

  editTodo(id: string, title: string): Promise<void>;

  toggleTodoDone(id: string): Promise<void>;

  removeTodo(id: string): Promise<void>;
}
