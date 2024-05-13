/* eslint-disable testing-library/prefer-screen-queries,testing-library/no-await-sync-query */
import { expect, test } from '@playwright/test';
import TodoAppPage from '../TodoAppPage';

test.describe('Change view type', async () => {
  test('View type is changed to a table and back to a list', async ({ page }) => {
    // GIVEN
    const todoAppPage = await new TodoAppPage(page).goto();

    // WHEN
    await todoAppPage.tableViewToggleButton.click();

    // THEN
    await expect(todoAppPage.todoCheckbox).toBeVisible();
    await expect(page).toHaveScreenshot();

    // WHEN
    await todoAppPage.listViewToggleButton.click();

    // THEN
    await expect(todoAppPage.todoCheckbox).toBeHidden();
    await expect(page).toHaveScreenshot();
  });
});
