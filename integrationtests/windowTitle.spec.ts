import { expect, test } from '@playwright/test';
import Page from './Page';

test.describe('Window title', () => {
  test('it has correct title', async ({ page }) => {
    // WHEN
    await new Page(page).goto();

    // THEN
    await expect(page).toHaveTitle(/Todo App/i);
  });
});
