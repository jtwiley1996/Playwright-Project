# Playwright Automation Testing Project

## Overview

This project demonstrates automated testing using [Playwright](https://playwright.dev/), a powerful end-to-end testing framework for web applications. The project includes tests for various functionalities such as login, dropdown selections, and basic authentication.

## Project Structure

- `tests/`
  - `login.spec.js` - Contains tests for login functionality.
  - `dropdown.spec.js` - Contains tests for dropdown menu interactions.
  - `basic-auth.spec.js` - Contains tests for Basic Authentication scenarios.
  - `homepage.spec.js` - Contains tests for the homepage title verification.

- `data_analysis.py` - A script for performing basic data analysis with Python, using Pandas.

## Installation

### For Playwright

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/playwright-project.git
   cd playwright-project

2. **Install Node.js dependencies**
    Ensure you have Node.js installed, and then run:
    ```bash
    npm install
    ```

### Running Tests

To run the Playwright tests, use the following command:
    ```bash
    npx playwright test
    ```

###Test Details:

1. Login Tests(`login.spec.js`)
- Verifies successful login with valid credentials
- Checks for failed login with invalid credentials

2. Dropdown Tests (`dropdown.spec.js)
- Tests selection of items from dropdown menus

3. Basic Authentication Tests
- Tests access to a page with correct Basic Auth credentials

4. Homepage Tests (`homepage.spec.js`)
-Verifies that the homepage loads and contains the correct title

## Contributing

Feel free to open issues or submit pull requests if you have suggestions or improvements.