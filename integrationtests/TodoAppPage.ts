import { Locator, Page, expect } from '@playwright/test';

export default class TodoAppPage {
  static readonly INITIAL_TODO_COUNT = 1;
  readonly heading: Locator;
  readonly undoneTodoCountBadge: Locator;
  readonly todoFilterInput: Locator;
  readonly todoTitleInput: Locator;
  readonly addTodoButton: Locator;
  readonly todoItems: Locator;
  readonly editTodoButton: Locator;
  readonly editTodoInput: Locator;
  readonly removeTodoButton: Locator;
  readonly markTodoDoneButton: Locator;
  readonly markTodoUndoneButton: Locator;
  readonly showUndoneTodosOnlyToggle: Locator;
  readonly listViewToggleButton: Locator;
  readonly tableViewToggleButton: Locator;
  readonly todoCheckbox: Locator;
  readonly darkModeToggleButton: Locator;
  readonly lightModeToggleButton: Locator;

  constructor(private readonly page: Page) {
    this.page = page;
    this.heading = page.getByRole('status').getByRole('heading', { name: /Todos/i });
    this.undoneTodoCountBadge = page.getByTitle(/Undone todo count/i);
    this.todoFilterInput = page.getByPlaceholder(/Search todos/i);
    this.todoTitleInput = page.getByLabel(/Add new todo.../i);
    this.todoItems = page.getByRole('listitem');
    this.editTodoButton = page.getByRole('button', { name: /Edit/i });
    this.editTodoInput = page.getByLabel(/Edit todo/i);
    this.removeTodoButton = page.getByRole('button', { name: /Remove/i });
    this.markTodoDoneButton = page.getByRole('button', { name: /Mark done/i });
    this.markTodoUndoneButton = page.getByRole('button', { name: /Mark undone/i });
    this.showUndoneTodosOnlyToggle = page.getByLabel(/Show undone only/i);
    this.listViewToggleButton = page.getByRole('button', { name: /list/i });
    this.tableViewToggleButton = page.getByRole('button', { name: /table/i });
    this.todoCheckbox = page.getByRole('checkbox', { name: /Dummy todo/i });
    this.darkModeToggleButton = page.getByRole('button', { name: /dark/i });
    this.lightModeToggleButton = page.getByRole('button', { name: /light/i });
    this.addTodoButton = page.getByRole('button', { name: /Add todo/i });
  }

  async goto() {
    await this.page.goto('http://localhost:3000?test=true');
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
    await expect(this.undoneTodoCountBadge).toHaveText(expectedTodoCount.toString());
  }

  async filterTodos(text: string, expectedInitialTodoCount: number) {
    await expect(this.todoItems).toHaveCount(expectedInitialTodoCount);
    this.todoFilterInput.fill(text);
  }
}
