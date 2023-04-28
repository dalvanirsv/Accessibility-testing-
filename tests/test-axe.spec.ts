import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('homepage', () => { 
  test('to verify aux WCGA rules accessibility issues', async ({ page }) => {
    await page.goto('https://www.itau.com.br/'); 

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); // 4

    expect(accessibilityScanResults.violations).toEqual([]);
  });
})