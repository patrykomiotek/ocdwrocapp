import { test, expect } from '@playwright/test';

test('can change values', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await page.getByRole('link', { name: 'Stepper' }).click();

  await page.waitForURL('http://localhost:5173/stepper');

  await expect(page.getByText('0', { exact: true })).toBeVisible();

  await page.getByRole('button', { name: '+', exact: true }).click();
  await page.getByRole('button', { name: '+', exact: true }).click();
  await page.getByRole('button', { name: '+', exact: true }).click();

  await expect(page.getByText('3', { exact: true })).toBeVisible();

  await page.getByRole('button', { name: '-', exact: true }).click();

  await expect(page.getByText('2', { exact: true })).toBeVisible();

  await page.getByTestId('my-custom-input').click();
  await page.getByTestId('my-custom-input').fill('100');
  await page.getByTestId('my-custom-input').press('Enter');
  await page.getByText('100', { exact: true }).click();

  await expect(page.getByText('100')).toBeVisible();
});
