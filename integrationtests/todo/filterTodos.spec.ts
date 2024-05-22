/* eslint-disable testing-library/prefer-screen-queries,testing-library/no-await-sync-query */
import { expect, test } from '@playwright/test';
import TodoAppPage from '../TodoAppPage';


test.describe('Filter todos', async () => {
  test('todos are filtered', async ({ page }) => {
    // GIVEN
    const todoAppPage = await new TodoAppPage(page).goto();
    const SEARCH_TERM_WITH_NO_MATCHES = 'X';

    // WHEN
    await todoAppPage.filterTodos(SEARCH_TERM_WITH_NO_MATCHES, TodoAppPage.INITIAL_TODO_COUNT);

    // THEN
    await expect(todoAppPage.todoItems).toHaveCount(0);
  });
});
