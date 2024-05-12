import { expect, test } from '@playwright/test';
import TodoAppPage from './TodoAppPage';

test.describe('Window title', () => {
  test('it has correct title', async ({ page }) => {
    // WHEN
    await new TodoAppPage(page).goto();

    // THEN
    await expect(page).toHaveTitle(/Todo App/i);
  });
});
