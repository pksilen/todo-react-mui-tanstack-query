/* eslint-disable testing-library/prefer-screen-queries,testing-library/no-await-sync-query */
import { expect, test } from '@playwright/test';
import TodoAppPage from '../TodoAppPage';


test.describe('Show undone todos only', async () => {
  test('Shows a todo that is not done', async ({ page }) => {
    // GIVEN
    const todoAppPage = await new TodoAppPage(page).goto();

    // WHEN
    await todoAppPage.showUndoneTodosOnlyToggle.click();

    // THEN
    await expect(todoAppPage.todoItems).toHaveCount(1);
  });

  test('Does not show a todo that is done', async ({ page }) => {
    // GIVEN
    const todoAppPage = await new TodoAppPage(page).goto();

    // WHEN
    await todoAppPage.showUndoneTodosOnlyToggle.click();
    await todoAppPage.markTodoDoneButton.click();

    // THEN
    await expect(todoAppPage.todoItems).toHaveCount(0);
  });
});
