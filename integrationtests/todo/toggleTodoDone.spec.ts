/* eslint-disable testing-library/prefer-screen-queries,testing-library/no-await-sync-query */
import { expect, test } from '@playwright/test';
import TodoAppPage from '../TodoAppPage';


test.describe('Toggle todo done', async () => {
  test('Todo is marked done and "mark done" button is changed to "mark undone"', async ({
    page
  }) => {
    // GIVEN
    const todoAppPage = await new TodoAppPage(page).goto();

    // WHEN
    await todoAppPage.markTodoDoneButton.click();

    // THEN
    await expect(todoAppPage.markTodoDoneButton).toBeHidden();
    await expect(todoAppPage.markTodoUndoneButton).toBeVisible();
    await expect(page).toHaveScreenshot();
  });
});
