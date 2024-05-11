/* eslint-disable testing-library/prefer-screen-queries,testing-library/no-await-sync-query */
import { expect, test } from '@playwright/test';
import Page from '../Page';

const TODO_TITLE = 'Test todo title';
const EMPTY_TODO_TITLE = '';

test.describe('Add todo', async () => {
  test('todo with non-empty title is added successfully', async ({ page }) => {
    // GIVEN
    const todoAppPage = await new Page(page).goto();

    // WHEN
    await todoAppPage.addNewTodo(TODO_TITLE, Page.INITIAL_TODO_COUNT);

    // THEN
    await todoAppPage.expectNewTodoAdded(
      TODO_TITLE,
      Page.INITIAL_TODO_COUNT + 1
    );
  });

  test('todo with an empty title is not added', async ({ page }) => {
    // GIVEN
    const todoAppPage = await new Page(page).goto();

    // WHEN
    await todoAppPage.addNewTodo(
      EMPTY_TODO_TITLE,
      Page.INITIAL_TODO_COUNT
    );

    // THEN
    await expect(todoAppPage.todoItems).toHaveCount(
      Page.INITIAL_TODO_COUNT
    );
  });
});
