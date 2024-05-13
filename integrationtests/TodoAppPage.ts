import { expect, Locator, Page } from '@playwright/test';

export default class TodoAppPage {
  static readonly INITIAL_TODO_COUNT = 1;
  readonly heading: Locator;
  readonly undoneTodoCountBadgeWithValueOne: Locator;
  readonly todoFilterInput: Locator;
  readonly todoTitleInput: Locator;
  readonly addTodoButton: Locator;
  readonly todoItems: Locator;
  readonly editTodoButton: Locator;
  readonly editedTodoTitle: Locator;
  readonly removeTodoButton: Locator;
  readonly markDoneButton: Locator;
  readonly markUndoneButton: Locator;
  readonly showUndoneTodosOnlyToggle: Locator;
  readonly listViewToggleButton: Locator;
  readonly tableViewToggleButton: Locator;
  readonly todoCheckbox: Locator;
  readonly darkModeToggleButton: Locator;
  readonly lightModeToggleButton: Locator;

  constructor(private readonly page: Page) {
    this.page = page;
    this.heading = page.getByTestId('badge').getByRole('heading', { name: 'Todos' });
    this.undoneTodoCountBadgeWithValueOne = page.getByTestId('badge').getByText('1');
    this.todoFilterInput = page.getByPlaceholder(/Search todos/i);
    this.todoTitleInput = page.getByLabel(/Add new todo.../i);
    this.todoItems = page.getByRole('listitem');
    this.editTodoButton = page.getByRole('button', { name: /Edit/i });
    this.editedTodoTitle = page.getByText('Dummy todo edited');
    this.removeTodoButton = page.getByRole('button', { name: /Remove/i });
    this.markDoneButton = page.getByRole('button', { name: /Mark done/i });
    this.markUndoneButton = page.getByRole('button', { name: /Mark undone/i });
    this.showUndoneTodosOnlyToggle = page.getByLabel(/Show undone only/i);
    this.listViewToggleButton = page.locator('[aria-label="list"]');
    this.tableViewToggleButton = page.locator('[aria-label="table"]');
    this.todoCheckbox = page.locator('input[name="Dummy todo"]');
    this.darkModeToggleButton = page.locator('[aria-label="dark"]');
    this.lightModeToggleButton = page.locator('[aria-label="light"]');

    this.addTodoButton = page.getByRole('button', {
      name: /Add todo/i
    });
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
