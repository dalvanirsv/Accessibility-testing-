import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
test('should not have any automatically detectable WCAG A or AA violations', async ({ page }) => {
    await page.goto('https://your-site.com/');
  
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a'])
      .analyze();
  
    expect(accessibilityScanResults.violations).toEqual(['wcag2a']);
  });