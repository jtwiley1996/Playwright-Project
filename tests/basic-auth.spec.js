const { test, expect } = require('@playwright/test');

test('should access a page with Basic Auth using correct credentials', async ({ page }) => {
  // Navigate to the Basic Auth page with credentials in URL
  await page.goto('http://admin:admin@the-internet.herokuapp.com/basic_auth');

  // Wait for the <p> element to be visible
  const paragraph = await page.locator('p');
  await expect(paragraph).toBeVisible();

  // Check for specific text content
  const content = await paragraph.textContent();
  expect(content).toContain('Congratulations! You must have the proper credentials.');
});
