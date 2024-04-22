import { expect, test } from '@playwright/test';

test.describe('App', () => {
  test('has correct title', async ({ page }) => {
    // WHEN
    await page.goto('http://localhost:3000');

    // THEN
    await expect(page).toHaveTitle(/React App/i);
  });
});
