import  { Page,expect,Locator } from '@playwright/test';


export default class LoginPage {
    readonly page: Page;
    readonly linkLogin: Locator;
    readonly loginHeader: Locator;
    
  constructor(page: Page) {
    this.page = page;
    this.linkLogin = page.getByRole('link', { name: 'Login' });
    this.loginHeader = page.getByRole('heading', { name: 'Login' });
  }

  async navigateToLoginPage() {
    // 1. Abrir la página de inicio de GeekStore.
    await this.page.goto('/');
    // 2. Verificar que la opción Login esté visible.
    await expect(this.linkLogin).toBeVisible();
     // 3. Activar Login para abrir la página de inicio de sesión.
    await this.linkLogin.click();
  }

  async verifyLoginPageHeader() {
    // Resultado esperado: confirmar que después de activar Login se muestra el encabezado del formulario de acceso.
    await expect(this.loginHeader).toBeVisible();
  }
}