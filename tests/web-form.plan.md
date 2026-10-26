# Plan básico de pruebas - Web Form

## Application Overview

Plan básico para explorar y validar las operaciones principales del formulario de demostración de Selenium en https://bonigarcia.dev/selenium-webdriver-java/web-form.html: carga de controles, captura de texto, selección de opciones, controles binarios y de rango, campos restringidos y envío/cancelación. Suposición inicial para cada escenario: abrir la URL en una sesión nueva, con el formulario en estado limpio y sin datos ingresados. La preparación automatizada del navegador falló porque falta el ejecutable Chromium local; por ello, los escenarios se basan en el formulario de demostración previsto y deben confirmarse visualmente al ejecutar.

## Test Scenarios

### 1. Operaciones básicas del formulario

**Seed:** `tests/seed.spec.ts`

#### 1.1. Mostrar controles y estados iniciales

**File:** `tests/web-form/form-rendering.spec.ts`

**Steps:**
  1. Abrir https://bonigarcia.dev/selenium-webdriver-java/web-form.html en una sesión nueva.
    - expect: La página muestra el formulario Web form y sus controles principales.
    - expect: Los controles aparecen con sus etiquetas y valores iniciales.
    - expect: Los campos identificados como deshabilitado y de solo lectura se distinguen de los campos editables.
  2. Recorrer visualmente los campos desde el inicio hasta los botones de acción.
    - expect: Los campos de texto, contraseña y área de texto están disponibles para edición.
    - expect: Se muestran controles de selección, casillas, radios y controles de color, fecha y rango, si están presentes en la página.

#### 1.2. Capturar valores en campos de texto

**File:** `tests/web-form/text-entry.spec.ts`

**Steps:**
  1. Ingresar "Prueba básica 123" en el campo de texto.
    - expect: El campo muestra exactamente el texto ingresado.
  2. Ingresar "ClaveDemo123!" en el campo de contraseña.
    - expect: El campo acepta el valor y lo oculta visualmente como contraseña.
  3. Ingresar "Primera línea\nSegunda línea" en el área de texto.
    - expect: El área de texto conserva ambas líneas y su salto de línea.

#### 1.3. Usar listas, casillas y botones de opción

**File:** `tests/web-form/selection-controls.spec.ts`

**Steps:**
  1. Seleccionar una opción distinta a la predeterminada en la lista desplegable.
    - expect: La opción elegida queda seleccionada y visible en el control.
  2. Ingresar o elegir una opción válida en la lista de sugerencias, si está disponible.
    - expect: El campo conserva la opción seleccionada o ingresada.
  3. Marcar una casilla desmarcada y luego volver a desmarcarla.
    - expect: La casilla alterna entre marcado y desmarcado en cada acción.
  4. Seleccionar el segundo botón de opción del grupo.
    - expect: El segundo botón queda seleccionado y el otro botón del mismo grupo queda deseleccionado.

#### 1.4. Cambiar color, fecha y rango

**File:** `tests/web-form/special-controls.spec.ts`

**Steps:**
  1. Cambiar el color usando el selector de color.
    - expect: El control refleja el nuevo color elegido.
  2. Ingresar una fecha válida en el selector de fecha.
    - expect: El control muestra la fecha válida seleccionada.
  3. Mover el control deslizante a otro valor.
    - expect: La posición o el valor del rango cambia y permanece seleccionado.

#### 1.5. Verificar campos deshabilitado y de solo lectura

**File:** `tests/web-form/restricted-fields.spec.ts`

**Steps:**
  1. Intentar enfocar y escribir en el campo deshabilitado.
    - expect: El campo no acepta entrada ni puede modificarse.
  2. Intentar reemplazar el contenido del campo de solo lectura.
    - expect: El campo permite consultar su contenido, pero no modificarlo.
  3. Completar los campos editables y continuar con la acción principal del formulario.
    - expect: Los campos restringidos no impiden interactuar con el resto del formulario.

#### 1.6. Enviar el formulario con datos de prueba

**File:** `tests/web-form/submit.spec.ts`

**Steps:**
  1. Completar los campos editables con valores de prueba válidos y seleccionar valores en los controles disponibles.
    - expect: Los valores ingresados y las selecciones se mantienen antes del envío.
  2. Pulsar Submit.
    - expect: El envío se completa sin error del navegador.
    - expect: La página de respuesta indica que el formulario fue enviado o presenta los valores recibidos.
  3. Comprobar en la página de respuesta los datos de texto enviados, sin exponer visualmente la contraseña.
    - expect: Los valores no sensibles enviados coinciden con los valores de prueba.
    - expect: La contraseña no se muestra en texto claro, salvo que el comportamiento explícito de la página de demostración indique lo contrario.

#### 1.7. Cancelar o restablecer la captura

**File:** `tests/web-form/cancel.spec.ts`

**Steps:**
  1. Ingresar valores de prueba en varios campos y cambiar al menos una casilla o selección.
    - expect: Los controles muestran los valores introducidos antes de cancelar.
  2. Pulsar Cancel.
    - expect: La acción cancela o restablece la captura según el comportamiento implementado por la página.
    - expect: No se muestra un envío exitoso si no se pulsó Submit.
