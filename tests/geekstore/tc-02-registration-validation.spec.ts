import { test, expect } from '../../fixtures/fixtures';

// spec: GeekStore.testplan.md
// seed: tests/seed.spec.ts

test.describe('Acceso y cuenta de cliente', () => {
  test('Validar campos obligatorios y formato durante el registro', async ({ registerPage }) => {
  
    await registerPage.navigateToRegisterPage();
    await registerPage.submitRegistrationForm();
    await registerPage.fillRegistrationForm();
    await registerPage.verifyInvalidInputsError();
    await registerPage.verifyModifiedInvalidInputsError();
    await registerPage.submitRegistrationForm();
    await registerPage.verifyRegisterPageHeader();
 
  });
});