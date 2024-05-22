/* eslint-disable testing-library/prefer-screen-queries,testing-library/no-await-sync-query */
import { expect, test } from '@playwright/test';
import TodoAppPage from './TodoAppPage';


test.describe('Heading', async () => {
  test('it has correct heading', async ({ page }) => {
    // GIVEN
    const todoAppPage = new TodoAppPage(page);

    // WHEN
    await todoAppPage.goto();

    // THEN
    await expect(todoAppPage.heading).toBeVisible();
  });

  test('it has undone todo count badge with value 1', async ({ page }) => {
    // GIVEN
    const todoAppPage = new TodoAppPage(page);

    // WHEN
    await todoAppPage.goto();

    // THEN
    await expect(todoAppPage.undoneTodoCountBadge).toHaveText('1');
  });
});
