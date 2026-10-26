import { test, expect } from '../../fixtures/fixtures';



// spec: GeekStore.testplan.md
// seed: tests/seed.spec.ts

test.describe('Acceso y cuenta de cliente', () => {
  test('Navegar al inicio de sesión desde la página de inicio', async ({ loginPage }) => {

   await test.step('Abrir la página de inicio de GeekStore y navegar al inicio de sesión', async () => {
    await loginPage.navigateToLoginPage();
    await loginPage.verifyLoginPageHeader();
    });
  });
});