import { v4 as uuidv4 } from 'uuid';
import { Todo } from '../model/Todo';
import { TodoService } from './TodoService';

let todos: Todo[] = [{ id: '1', title: 'Dummy todo', isDone: false }];

class FakeTodoService implements TodoService {
  addTodo(title: string): Promise<void> {
    const newTodo = { id: uuidv4(), title, isDone: false };
    todos = [...todos, newTodo];
    return Promise.resolve();
  }

  getTodos(): Promise<Todo[]> {
    return new Promise((resolve, reject) => {
      resolve(todos);
    });
  }

  editTodo(id: string, title: string): Promise<void> {
    todos = todos.map((todo) => (todo.id === id ? { ...todo, title } : todo));
    return Promise.resolve();
  }

  toggleTodoDone(id: string): Promise<void> {
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );

    return Promise.resolve();
  }

  removeTodo(id: string): Promise<void> {
    todos = todos.filter((todo) => todo.id !== id);
    return Promise.resolve();
  }
}

const todoService = new FakeTodoService();
export default todoService;
