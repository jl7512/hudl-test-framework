import { Page } from '@playwright/test';

import { BASE_URL } from '../utils/config';

export default class LoginPage {
  page: Page;
  
  constructor(page: Page) {
    this.page = page;
  }

  get loginButton() {    
    return this.page.locator('a[data-qa-id="login-select"]');
  }

  get hudlLoginLink() {
    return this.page.locator('a[data-qa-id="login-hudl"]');
  }

  get usernameInput() {
    return this.page.locator('input[id="username"]');
  }

  get passwordInput() {
    return this.page.locator('input[id="password"]');
  }

  get continueButton() {
    return this.page.locator('button[data-action-button-primary="true"]');
  }

  get errorMessage() {
    return this.page.locator('span[data-error-code="wrong-email-credentials"]');
  }

  async login(username: string, password: string) {
    await this.page.goto(BASE_URL);
    await this.loginButton.click();
    await this.hudlLoginLink.click();
    
    await this.usernameInput.fill(username);
    await this.continueButton.click();

    await this.passwordInput.fill(password);
    await this.continueButton.click();
  }
};
