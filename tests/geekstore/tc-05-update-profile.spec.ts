import { test, expect } from '@playwright/test';

// spec: GeekStore.testplan.md
// seed: tests/seed.spec.ts

test.describe('Acceso y cuenta de cliente', () => {
  test('Actualizar los datos personales del perfil', async ({ page }) => {
    const firstName = page.getByRole('textbox', { name: 'First Name' });
    const lastName = page.getByRole('textbox', { name: 'Last Name' });

    // 1. Abrir el perfil de la cuenta autenticada.
    await page.goto('https://testing.geekqa.net/public_html/public/index.php/SignUp');
    await page.locator('#email').fill('qa.confirm.20261026@example.com');
    await page.locator('#password').fill('GeekQA-test-26!');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'My Account' }).click();
    await expect(lastName).toHaveValue('Confirm');

    // 2. Cambiar uno o más datos personales permitidos.
    await firstName.fill('Qa Updated');

    // 3. Guardar los cambios.
    await page.getByRole('button', { name: 'Update' }).click();

    // 4. Volver a consultar el perfil.
    await page.getByRole('link', { name: 'Home' }).click();
    await page.getByRole('link', { name: 'My Account' }).click();
    await expect(firstName).toHaveValue('Qa Updated');
    await expect(lastName).toHaveValue('Confirm');
  });
});