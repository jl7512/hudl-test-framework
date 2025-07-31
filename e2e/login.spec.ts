import { test, expect } from '../utils/custom-fixture';

import { HUDL_USERNAME, HUDL_PASSWORD } from '../utils/config';

test.describe('Login', () => {
  test('I can successfully login with valid credentials', async ({ loginPage }) => {
    await loginPage.login(HUDL_USERNAME, HUDL_PASSWORD);
    const globalNavBar = loginPage.page.locator('nav[data-qa-id="gloabl-navbar"]');

    // Check that we are on the home page route after successful login
    await expect(loginPage.page).toHaveURL(/.*\/home/);

    // Once logged in, we should see the global navigation bar
    await expect(globalNavBar).toBeVisible();
  });

  test('I CANNOT login with invalid credentials', async ({ loginPage }) => {
    await loginPage.login('invalidUsername@gmail.com', 'invalidPassword12345');

    // Check that we are still on the login after we cannot login with invalid credentials
    await expect(loginPage.page).toHaveURL(/.*\/login/);
    
    // Upon trying to login again with invalid credentials, we should see an error message
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText('Incorrect username or password.');
  });
});
