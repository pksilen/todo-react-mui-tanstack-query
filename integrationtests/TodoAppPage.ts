import { expect, Locator, Page } from '@playwright/test';

export default class TodoAppPage {
  static readonly INITIAL_TODO_COUNT = 1;
  readonly heading: Locator;
  readonly undoneTodoCountBadgeWithValueOne: Locator;
  readonly todoFilterInput: Locator;
  readonly todoTitleInput: Locator;
  readonly addTodoButton: Locator;
  readonly todoItems: Locator;

  constructor(private readonly page: Page) {
    this.page = page;

    this.heading = page
      .getByTestId('badge')
      .getByRole('heading', { name: 'Todos' });

    this.undoneTodoCountBadgeWithValueOne = page
      .getByTestId('badge')
      .getByText('1');

    this.todoFilterInput = page.getByPlaceholder(/Search todos/i);

    this.todoTitleInput = page.getByLabel(/Add new todo.../i);

    this.addTodoButton = page.getByRole('button', {
      name: /Add todo/i
    });

    this.todoItems = page.getByRole('listitem');
  }

  async goto() {
    await this.page.goto('http://localhost:3000');
    return this;
  }

  async addNewTodo(title: string, expectedInitialTodoCount: number) {
    await expect(this.todoItems).toHaveCount(expectedInitialTodoCount);
    await this.todoTitleInput.fill(title);
    await this.addTodoButton.click();
  }

  async expectNewTodoAdded(title: string, expectedTodoCount: number) {
    await expect(this.todoItems).toHaveCount(expectedTodoCount);
    const addedTodo = this.page.getByText(title);
    await expect(addedTodo).toBeVisible();
    await expect(this.todoTitleInput).toBeEmpty();

    const undoneTodoCountBadge = this.page
      .getByTestId('badge')
      .getByText(expectedTodoCount.toString());

    await expect(undoneTodoCountBadge).toBeVisible();
  }

  async filterTodos(text: string, expectedInitialTodoCount: number) {
    await expect(this.todoItems).toHaveCount(expectedInitialTodoCount);
    this.todoFilterInput.fill(text);
  }
}
