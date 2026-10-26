import { test, expect } from '@playwright/test';

// spec: GeekStore.testplan.md
// seed: tests/seed.spec.ts

test.describe('Acceso y cuenta de cliente', () => {
  test('Rechazar un nombre de usuario duplicado', async ({ page }) => {
    const runId = Date.now();
    const signupForm = page.locator('form').filter({ hasText: 'Sign Up Sign up for a GeekQA' });
    const phoneNumber = signupForm.getByPlaceholder('Phone Number');
    const email = page.locator('input[name="newemail"]');
    const username = page.getByRole('textbox', { name: 'Username' });
    const firstName = signupForm.getByPlaceholder('First Name');
    const lastName = signupForm.getByPlaceholder('Last Name');
    const password = signupForm.getByPlaceholder('Password', { exact: true });
    const confirmPassword = page.getByRole('textbox', { name: 'Confirm Password' });

    // 1. Abrir el registro.
    await page.goto('https://testing.geekqa.net/public_html/public/index.php/SignUp');

    // 2. Ingresar un nombre de usuario existente y completar los demás campos con datos válidos.
    await username.fill('qa_geek_20261026_1150');
    await phoneNumber.fill(`555${String(runId).slice(-7)}`);
    await email.fill(`qa.duplicate.${runId}@example.com`);
    await firstName.fill('Qa');
    await lastName.fill('Duplicate');
    await password.fill('GeekQA-test-26!');
    await confirmPassword.fill('GeekQA-test-26!');

    // 3. Enviar el formulario.
    await page.getByRole('button', { name: 'Sign Up' }).click();
    await expect(page.getByText('Username Already Taken')).toBeVisible();
  });
});