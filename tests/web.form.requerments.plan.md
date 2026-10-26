# Borrador de requerimientos - Web Form

## Application Overview

Borrador de requerimientos funcionales y escenarios básicos para el formulario de demostración Selenium disponible en https://bonigarcia.dev/selenium-webdriver-java/web-form.html. Cada escenario parte de una sesión nueva y el formulario limpio. La exploración automatizada no se completó porque el entorno no tiene Chromium instalado; se debe confirmar la presencia y el comportamiento de los controles al ejecutar los casos.

## Test Scenarios

### 1. Requerimientos funcionales básicos del formulario

**Seed:** `tests/seed.spec.ts`

#### 1.1. Visualizar controles y estados iniciales

**File:** `tests/web-form/form-rendering.spec.ts`

**Steps:**
  1. Abrir la URL del formulario en una sesión nueva: https://bonigarcia.dev/selenium-webdriver-java/web-form.html.
    - expect: La página carga y presenta el formulario Web form.
    - expect: Los controles, etiquetas y valores iniciales se muestran correctamente.
    - expect: Los campos deshabilitados y de solo lectura se pueden distinguir de los campos editables.
  2. Recorrer el formulario desde el inicio hasta los controles de acción.
    - expect: Los campos de texto, contraseña y área de texto están disponibles.
    - expect: Los controles de selección, casillas, opciones, color, fecha y rango visibles pueden identificarse.

#### 1.2. Ingresar datos en campos de texto

**File:** `tests/web-form/text-entry.spec.ts`

**Steps:**
  1. Escribir "Prueba básica 123" en el campo de texto.
    - expect: El valor ingresado queda visible y sin cambios.
  2. Escribir "ClaveDemo123!" en el campo de contraseña.
    - expect: El campo acepta la entrada y la oculta visualmente.
  3. Escribir "Primera línea\nSegunda línea" en el área de texto.
    - expect: El campo conserva las dos líneas y el salto de línea.

#### 1.3. Cambiar opciones y controles binarios

**File:** `tests/web-form/selection-controls.spec.ts`

**Steps:**
  1. Elegir en la lista desplegable una opción diferente de la inicial.
    - expect: La opción seleccionada queda reflejada en el control.
  2. Ingresar una opción válida en la lista de sugerencias, si está presente.
    - expect: El campo conserva la opción ingresada o elegida.
  3. Marcar una casilla inicialmente desmarcada y volver a pulsarla.
    - expect: La casilla pasa a marcada y después vuelve a desmarcada.
  4. Seleccionar una opción diferente dentro del grupo de botones de radio.
    - expect: La opción elegida queda seleccionada y las demás opciones del mismo grupo se desmarcan.

#### 1.4. Modificar controles de color, fecha y rango

**File:** `tests/web-form/special-controls.spec.ts`

**Steps:**
  1. Elegir un color diferente con el selector de color.
    - expect: El selector refleja el color elegido.
  2. Ingresar o elegir una fecha válida.
    - expect: El control conserva y muestra la fecha elegida.
  3. Mover el control de rango a una posición distinta de la inicial.
    - expect: El control refleja la nueva posición o valor.

#### 1.5. Respetar restricciones de campos

**File:** `tests/web-form/restricted-fields.spec.ts`

**Steps:**
  1. Intentar ingresar texto en el campo deshabilitado.
    - expect: El campo no recibe ni conserva cambios.
  2. Intentar modificar el valor del campo de solo lectura.
    - expect: El contenido no puede modificarse.
  3. Completar otro campo editable del formulario.
    - expect: Los campos restringidos no bloquean la interacción con los campos editables.

#### 1.6. Enviar el formulario con datos válidos

**File:** `tests/web-form/submit.spec.ts`

**Steps:**
  1. Completar los campos editables con datos de prueba y elegir valores en los controles disponibles.
    - expect: Los valores ingresados y las selecciones se conservan antes de enviar.
  2. Pulsar Submit.
    - expect: El formulario se envía sin errores de validación para datos válidos.
    - expect: Se muestra la respuesta de envío prevista por la página.
  3. Revisar la respuesta del envío.
    - expect: Los datos no sensibles recibidos corresponden con los valores de prueba.
    - expect: La contraseña se maneja de acuerdo con el comportamiento definido por la página de demostración.

#### 1.7. Cancelar o restablecer la captura

**File:** `tests/web-form/cancel.spec.ts`

**Steps:**
  1. Ingresar datos de prueba en varios campos y cambiar al menos una selección.
    - expect: Los controles muestran los cambios antes de cancelar.
  2. Pulsar Cancel.
    - expect: La página cancela o restablece la captura según el comportamiento implementado.
    - expect: No se presenta un resultado de envío exitoso.
