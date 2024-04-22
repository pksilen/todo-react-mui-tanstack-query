/* eslint-disable testing-library/prefer-screen-queries,testing-library/no-await-sync-query */
import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000');
});

test.describe('Header', async () => {
  test('has correct heading', async ({ page }) => {
    // WHEN
    const todosHeading = page
      .getByTestId('badge')
      .getByRole('heading', { name: 'Todos' });

    // THEN
    await expect(todosHeading).toBeVisible();
  });

  test('has correct undone todo count badge', async ({ page }) => {
    // WHEN
    const undoneTodoCountBadgeWithValueOne = page
      .getByTestId('badge')
      .getByText('1');

    // THEN
    await expect(undoneTodoCountBadgeWithValueOne).toBeVisible();
  });
});
