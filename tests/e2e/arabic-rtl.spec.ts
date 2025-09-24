import { test, expect } from '@playwright/test';

test('Arabic home renders RTL with Arabic nav', async ({ page }) => {
  await page.goto('/ar');
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  await expect(page.getByRole('navigation').getByRole('link', { name: 'الرئيسية' })).toBeVisible();
});

