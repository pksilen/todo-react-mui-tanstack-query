/* eslint-disable testing-library/prefer-screen-queries,testing-library/no-await-sync-query */
import { expect, test } from '@playwright/test';
import TodoAppPage from '../TodoAppPage';

test.describe('Change view mode', async () => {
  test('View mode is changed to light mode and then back to dark mode', async ({ page }) => {
    // GIVEN
    const todoAppPage = await new TodoAppPage(page).goto();

    // WHEN
    await todoAppPage.lightModeToggleButton.click();

    // THEN
    await expect(page).toHaveScreenshot();

    // WHEN
    await todoAppPage.darkModeToggleButton.click();

    // THEN
    await expect(page).toHaveScreenshot();
  });
});
