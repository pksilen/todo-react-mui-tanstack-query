/* eslint-disable testing-library/prefer-screen-queries,testing-library/no-await-sync-query */
import { expect, test } from '@playwright/test';
import TodoAppPage from './TodoAppPage';

test.describe('Header', async () => {
  test('it filters todos', async ({ page }) => {
    // GIVEN
    const todoAppPage = await new TodoAppPage(page).goto();
    const NON_EXISTENT_SEARCH_TERM = 'X';

    // WHEN
    await todoAppPage.filterTodos(
      NON_EXISTENT_SEARCH_TERM,
      TodoAppPage.INITIAL_TODO_COUNT
    );

    // THEN
    await expect(todoAppPage.todoItems).toHaveCount(0);
  });
});
