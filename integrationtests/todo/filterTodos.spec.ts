/* eslint-disable testing-library/prefer-screen-queries,testing-library/no-await-sync-query */
import { expect, test } from '@playwright/test';
import Page from '../Page';

test.describe('Header', async () => {
  test('it filters todos', async ({ page }) => {
    // GIVEN
    const todoAppPage = await new Page(page).goto();
    const NON_EXISTENT_SEARCH_TERM = 'X';

    // WHEN
    await todoAppPage.filterTodos(
      NON_EXISTENT_SEARCH_TERM,
      Page.INITIAL_TODO_COUNT
    );

    // THEN
    await expect(todoAppPage.todoItems).toHaveCount(0);
  });
});
