/* eslint-disable testing-library/prefer-screen-queries,testing-library/no-await-sync-query */
import { expect, Locator, test } from '@playwright/test';

let todoTitleInput: Locator;
let addTodoButton: Locator;
let todoListItems: Locator;
const INITIAL_TODO_COUNT = 1;

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000');
  todoTitleInput = page.getByLabel(/Add new todo.../i);

  addTodoButton = page.getByRole('button', {
    name: /Add todo/i
  });

  todoListItems = page.getByRole('listitem');
  await expect(todoListItems).toHaveCount(INITIAL_TODO_COUNT);
});

test.describe('Add todo', async () => {
  test('todo with non-empty title is added successfully', async ({ page }) => {
    // GIVEN
    await todoTitleInput.fill('Test todo');

    // WHEN
    await addTodoButton.click();

    // THEN
    await expect(todoListItems).toHaveCount(INITIAL_TODO_COUNT + 1);
    const testTodoListItem = page.getByText('Test todo');
    await expect(testTodoListItem).toBeVisible();
    await expect(todoTitleInput).toBeEmpty();
  });

  test('todo with an empty title is not added', async () => {
    // WHEN
    await addTodoButton.click();

    // THEN
    await expect(todoListItems).toHaveCount(INITIAL_TODO_COUNT);
  });
});
