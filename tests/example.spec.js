const { test, expect } = require('@playwright/test');

test('should load the homepage and check the title', async ({ page }) => {
  await page.goto('http://the-internet.herokuapp.com');
  await expect(page).toHaveTitle('The Internet');
});
