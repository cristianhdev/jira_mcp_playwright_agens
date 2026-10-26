import { test, expect } from '@playwright/test';

// spec: GeekStore.testplan.md
// seed: tests/seed.spec.ts

test.describe('Acceso y cuenta de cliente', () => {
  test('Validar campos obligatorios y formato durante el registro', async ({ page }) => {
    const runId = Date.now();
    const accountEmail = `qa.autotest.${runId}@example.com`;
    const username = `qa_geek_${runId}`;
    const testPassword = 'GeekQA-test-26!';
    const signupForm = page.locator('form').filter({ hasText: 'Sign Up Sign up for a GeekQA' });
    const phoneNumber = signupForm.getByPlaceholder('Phone Number');
    const email = page.locator('input[name="newemail"]');
    const usernameField = page.getByRole('textbox', { name: 'Username' });
    const firstName = signupForm.getByPlaceholder('First Name');
    const lastName = signupForm.getByPlaceholder('Last Name');
    const password = signupForm.getByPlaceholder('Password', { exact: true });
    const confirmPassword = page.getByRole('textbox', { name: 'Confirm Password' });
    const signUpButton = page.getByRole('button', { name: 'Sign Up' });

    // 1. Abrir el registro y verificar que solicite teléfono, email, nombre de usuario y contraseña.
    await page.goto('https://testing.geekqa.net');
    await page.getByRole('link', { name: 'Login' }).click();
    await expect(phoneNumber).toBeEmpty();
    await expect(email).toBeEmpty();
    await expect(usernameField).toBeEmpty();
    await expect(password).toBeEmpty();
    await expect(confirmPassword).toBeEmpty();

    // 2. Intentar enviar el formulario con los campos obligatorios vacíos, individualmente y en conjunto.
    await signUpButton.click();
    await expect(phoneNumber).toBeFocused();
    await phoneNumber.fill('5550102026');
    await signUpButton.click();
    await expect(email).toBeFocused();
    await email.fill(accountEmail);
    await signUpButton.click();
    await expect(usernameField).toBeFocused();
    await usernameField.fill(username);
    await signUpButton.click();
    await expect(firstName).toBeFocused();
    await firstName.fill('Qa');
    await signUpButton.click();
    await expect(lastName).toBeFocused();
    await lastName.fill('Test');
    await signUpButton.click();
    await expect(password).toBeFocused();
    await password.fill(testPassword);
    await signUpButton.click();
    await expect(confirmPassword).toBeFocused();

    // 3. Ingresar valores con formato inválido en los campos que validan formato.
    await email.fill('correo-no-valido');
    await confirmPassword.fill(testPassword);
    await signUpButton.click();
    await expect(email).toBeFocused();

    // 4. Corregirlos con valores válidos y completar los demás campos obligatorios.
    await email.fill(accountEmail);
    await expect(phoneNumber).toHaveValue('5550102026');
    await expect(usernameField).toHaveValue(username);
    await expect(firstName).toHaveValue('Qa');
    await expect(lastName).toHaveValue('Test');

    // 5. Enviar el formulario con datos válidos.
    await signUpButton.click();
    await expect(page.getByRole('link', { name: 'My Account' })).toBeVisible();
  });
});