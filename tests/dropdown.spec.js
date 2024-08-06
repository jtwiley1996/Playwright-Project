const { test, expect } = require('@playwright/test');

test('should select Option 1 from the dropdown', async ({ page }) => {
  await page.goto('http://the-internet.herokuapp.com/dropdown');
  
  // Select Option 1
  await page.selectOption('#dropdown', '1'); // Value for Option 1
  const selectedValue = await page.$eval('#dropdown', el => el.value);
  expect(selectedValue).toBe('1');
  
  const selectedText = await page.locator('#dropdown option:checked').innerText();
  expect(selectedText).toBe('Option 1');
});

test('should select Option 2 from the dropdown', async ({ page }) => {
  await page.goto('http://the-internet.herokuapp.com/dropdown');
  
  // Select Option 2
  await page.selectOption('#dropdown', '2'); // Value for Option 2
  const selectedValue = await page.$eval('#dropdown', el => el.value);
  expect(selectedValue).toBe('2');
  
  const selectedText = await page.locator('#dropdown option:checked').innerText();
  expect(selectedText).toBe('Option 2');
});
