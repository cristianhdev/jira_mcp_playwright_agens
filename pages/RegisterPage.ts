import { Page,expect,Locator } from '@playwright/test';

export default class RegisterPage {
  private rundId: number;
  public accountEmail: string;
  public username: string;
  public testPassword: string;
  readonly page: Page;
  readonly linkLogin: Locator;
  readonly registerHeader: Locator;
  readonly signupLink: Locator;
  readonly phoneNumberInput: Locator;
  readonly emailInput: Locator;
  readonly usernameInput: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly signUpButton: Locator;
  readonly loginAccountHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.rundId = Date.now();
    this.accountEmail = `qa.autotest.${this.rundId}@example.com`;
    this.username = `qa_geek_${this.rundId}`;
    this.testPassword = 'GeekQA-test-26!';
    this.linkLogin = page.getByRole('link', { name: 'Login' });
    this.registerHeader = page.getByRole('heading', { name: 'Register' });
    this.signupLink = page.locator('form').filter({ hasText: 'Sign Up Sign up for a GeekQA' });
    this.phoneNumberInput = this.signupLink.getByPlaceholder('Phone Number');
    this.emailInput = page.locator('input[name="newemail"]');
    this.usernameInput = this.signupLink.getByPlaceholder('Username');
    this.firstNameInput = this.signupLink.getByPlaceholder('First Name');
    this.lastNameInput = this.signupLink.getByPlaceholder('Last Name');
    this.passwordInput = this.signupLink.getByPlaceholder('Password', { exact: true });
    this.confirmPasswordInput =  page.getByRole('textbox', { name: 'Confirm Password' });
    this.signUpButton = this.signupLink.getByRole('button', { name: 'Sign Up' });
    this.loginAccountHeader = page.getByRole('link', { name: 'My Account' });
  }

  async navigateToRegisterPage() {
    // 1. Abrir la página de inicio de GeekStore.
    await this.page.goto('/');
    // 2. Verificar que la opción Register esté visible.
    await expect(this.linkLogin).toBeVisible();
    // 3. Activar Register para abrir la página de registro.
    await this.linkLogin.click();
    // Resultado esperado: confirmar que después de activar Register se muestra el encabezado del formulario de registro.
    await expect(this.phoneNumberInput).toBeEmpty();
    await expect(this.emailInput).toBeEmpty();
    await expect(this.usernameInput).toBeEmpty();
    await expect(this.passwordInput).toBeEmpty();
    await expect(this.confirmPasswordInput).toBeEmpty();
  }

  async fillRegistrationForm() {
    await this.phoneNumberInput.fill('5550102026');
    await expect(this.phoneNumberInput).toBeFocused();
    await this.emailInput.fill(this.accountEmail);
    await expect(this.emailInput).toBeFocused();
    await this.usernameInput.fill(this.username);
    await expect(this.usernameInput).toBeFocused();
    await this.firstNameInput.fill('Qa');
    await expect(this.firstNameInput).toBeFocused();
    await this.lastNameInput.fill('Test');
    await expect(this.lastNameInput).toBeFocused();
    await this.passwordInput.fill(this.testPassword);
    await expect(this.passwordInput).toBeFocused();
    await this.confirmPasswordInput.fill(this.testPassword);
    await expect(this.confirmPasswordInput).toBeFocused();
  } 

  async verifyRegisterPageHeader() {
    // Resultado esperado: confirmar que después de activar Register se muestra el encabezado del formulario de registro.
    await expect(this.loginAccountHeader).toBeVisible();
  }

   async submitRegistrationForm() {
    await this.signUpButton.click();
   }

   async verifyInvalidInputsError() {
    await this.emailInput.fill('correo-no-valido');
    await this.confirmPasswordInput.fill(this.testPassword);
    await this.signUpButton.click();
    await expect(this.emailInput).toBeFocused();
   }


    async verifyModifiedInvalidInputsError() {
        await this.emailInput.fill(this.accountEmail);
        await expect(this.phoneNumberInput).toHaveValue('5550102026');
        await expect(this.usernameInput).toHaveValue(this.username);
        await expect(this.firstNameInput).toHaveValue('Qa');
        await expect(this.lastNameInput).toHaveValue('Test');
   }

   async verifyPageRedirectedToLogin() {
    // Resultado esperado: confirmar que después de activar Register se muestra el encabezado del formulario de registro.
    await expect(this.loginAccountHeader).toBeVisible();
   }
}