import { test as base, expect } from '@playwright/test';

import LoginPage from '../pages/login-page';

type TestFixtures = {
  loginPage: LoginPage;
  login: () => void;
};

export const test = base.extend<TestFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});

export { expect };
