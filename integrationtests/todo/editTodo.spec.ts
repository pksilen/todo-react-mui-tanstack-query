/* eslint-disable testing-library/prefer-screen-queries,testing-library/no-await-sync-query */
import { expect, test } from '@playwright/test';
import TodoAppPage from '../TodoAppPage';


test.describe('Edit todo', async () => {
  test('todo title is edited', async ({ page }) => {
    // GIVEN
    const todoAppPage = await new TodoAppPage(page).goto();

    // WHEN
    await todoAppPage.editTodoButton.click();

    // THEN
    await expect(todoAppPage.editTodoInput).toBeVisible();
  });
});
