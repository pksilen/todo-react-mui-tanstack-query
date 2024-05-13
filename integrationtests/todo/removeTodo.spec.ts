/* eslint-disable testing-library/prefer-screen-queries,testing-library/no-await-sync-query */
import { expect, test } from '@playwright/test';
import TodoAppPage from '../TodoAppPage';

test.describe('Remove todo', async () => {
  test('todo is removed', async ({ page }) => {
    // GIVEN
    const todoAppPage = await new TodoAppPage(page).goto();

    // WHEN
    await todoAppPage.removeTodoButton.click();

    // THEN
    await expect(todoAppPage.todoItems).toHaveCount(0);
  });
});
