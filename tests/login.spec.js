const { test, expect } = require('@playwright/test');

test('should log in with valid credentials', async ({ page }) => {
  await page.goto('http://the-internet.herokuapp.com/login');
  
  // Fill in the login form
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');
  
  // Assert that the login was successful
  await expect(page).toHaveURL('http://the-internet.herokuapp.com/secure');
  await expect(page.locator('h2')).toHaveText('Secure Area');
});

test('should fail login with invalid credentials', async ({ page }) => {
  await page.goto('http://the-internet.herokuapp.com/login');
  
  // Fill in the login form with invalid credentials
  await page.fill('#username', 'invaliduser');
  await page.fill('#password', 'invalidpassword');
  await page.click('button[type="submit"]');
  
  // Assert that the login failed and an error message is displayed
  await expect(page.locator('.flash.error')).toHaveText('Your username is invalid!');
});
