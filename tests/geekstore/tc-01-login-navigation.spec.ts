import { test, expect } from '@playwright/test';

// spec: GeekStore.testplan.md
// seed: tests/seed.spec.ts

test.describe('Acceso y cuenta de cliente', () => {
  test('Navegar al inicio de sesión desde la página de inicio', async ({ page }) => {

   await test.step('Abrir la página de inicio de GeekStore y navegar al inicio de sesión', async () => {
    // 1. Abrir la página de inicio de GeekStore.
    await page.goto('https://testing.geekqa.net');
     // 2. Verificar que la opción Login esté visible.
    await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();

    // 3. Activar Login para abrir la página de inicio de sesión.
    await page.getByRole('link', { name: 'Login' }).click();

    // Resultado esperado: confirmar que después de activar Login se muestra el encabezado del formulario de acceso.
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
    });
  });
});