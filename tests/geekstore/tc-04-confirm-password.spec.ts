import { test, expect } from '@playwright/test';

// spec: GeekStore.testplan.md
// seed: tests/seed.spec.ts

test.describe('Acceso y cuenta de cliente', () => {
  test('Validar confirmación de contraseña', async ({ page }) => {
    const runId = Date.now();
    const signupForm = page.locator('form').filter({ hasText: 'Sign Up Sign up for a GeekQA' });
    const password = signupForm.getByPlaceholder('Password', { exact: true });
    const confirmPassword = page.getByRole('textbox', { name: 'Confirm Password' });
    const signUpButton = page.getByRole('button', { name: 'Sign Up' });

    // 1. Verificar que el formulario solicite confirmación de contraseña.
    await page.goto('https://testing.geekqa.net/public_html/public/index.php/SignUp');
    await expect(confirmPassword).toBeVisible();

    // 2. Completar los campos con contraseñas distintas e intentar enviar.
    await signupForm.getByPlaceholder('Phone Number').fill(`555${String(runId).slice(-7)}`);
    await page.locator('input[name="newemail"]').fill(`qa.confirm.${runId}@example.com`);
    await page.getByRole('textbox', { name: 'Username' }).fill(`qa_confirm_${runId}`);
    await signupForm.getByPlaceholder('First Name').fill('Qa');
    await signupForm.getByPlaceholder('Last Name').fill('Confirm');
    await password.fill('GeekQA-test-26!');
    await confirmPassword.fill('Mismatch26!');
    await signUpButton.click();
    await expect(page.getByText('Confirm Password required Or')).toBeVisible();

    // 3. Corregir la confirmación para que coincida e intentar enviar de nuevo.
    await confirmPassword.fill('GeekQA-test-26!');
    await password.fill('GeekQA-test-26!');
    await signUpButton.click();
    await expect(page.getByRole('link', { name: 'My Account' })).toBeVisible();
  });
});