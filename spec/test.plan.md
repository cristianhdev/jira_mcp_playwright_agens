# Pruebas básicas del backlog de Jira

## Application Overview

Plan de pruebas funcionales para el backlog del proyecto TP. La interfaz requiere autenticación Atlassian; los escenarios parten de una sesión ya autenticada y de un estado limpio/fresco del navegador.

## Test Scenarios

### 1. Operaciones básicas del backlog

**Seed:** `tests/seed.spec.ts`

#### 1.1. Buscar y abrir una incidencia desde el backlog

**File:** `tests/backlog/search-and-open.spec.ts`

**Steps:**
  1. En una sesión autenticada, abrir la URL https://cristianqa-39521588.atlassian.net/jira/software/projects/TP/boards/5/backlog.
    - expect: El backlog del proyecto TP se carga correctamente.
    - expect: Se muestran el listado de incidencias o su estado vacío.
    - expect: No se muestra una pantalla de inicio de sesión ni un mensaje de acceso denegado.
  2. Localizar el campo de búsqueda o filtro disponible en la vista del backlog y escribir una cadena conocida que corresponda al resumen de una incidencia existente.
    - expect: La coincidencia de búsqueda se aplica.
    - expect: Solo se muestran incidencias cuyo resumen o atributos visibles coincidan con la búsqueda, o Jira muestra de forma explícita que no hay coincidencias.
  3. Abrir una incidencia coincidente desde el listado.
    - expect: Se abre el detalle o panel lateral de la incidencia.
    - expect: Se muestran identificador, resumen y campos principales de la incidencia.
    - expect: La dirección o el estado de la vista refleja la incidencia abierta.
  4. Cerrar el panel o volver al backlog.
    - expect: La vista vuelve al backlog sin perder el contexto de navegación.
    - expect: La búsqueda o el filtro permanece aplicado si Jira conserva ese estado.

#### 1.2. Crear una incidencia básica en el backlog

**File:** `tests/backlog/create-issue.spec.ts`

**Steps:**
  1. Abrir el backlog del proyecto TP desde una sesión autenticada con permisos de creación.
    - expect: El backlog y sus acciones aparecen disponibles.
  2. Seleccionar la acción principal de creación, como «Crear incidencia» o «Crear».
    - expect: Se abre el diálogo o formulario de creación.
    - expect: Los campos obligatorios básicos, por ejemplo tipo de incidencia, resumen y proyecto, están disponibles.
  3. Introducir un resumen único para la prueba, mantener el resto de valores válidos y confirmar la creación.
    - expect: El resumen se acepta sin errores de validación.
    - expect: Jira crea la incidencia y muestra una confirmación o la nueva incidencia en el proyecto/backlog.
  4. Buscar por el resumen único creado y abrir la incidencia.
    - expect: La incidencia aparece una sola vez en el resultado.
    - expect: Los datos básicos visibles contienen exactamente el resumen utilizado y el proyecto TP.

#### 1.3. Aplicar y limpiar un filtro básico del backlog

**File:** `tests/backlog/filter-clear.spec.ts`

**Steps:**
  1. Abrir el backlog del proyecto TP.
    - expect: La vista carga correctamente y las incidencias disponibles se muestran con sus controles de filtro.
  2. Seleccionar un filtro básico disponible, como un tipo, estado o responsable, y elegir una opción válida.
    - expect: El backlog aplica el filtro seleccionado.
    - expect: El indicador o etiqueta del filtro muestra que está activo.
  3. Eliminar el filtro mediante su control de cierre o usar la acción «Limpiar»/«Restablecer», según esté disponible.
    - expect: El filtro deja de estar activo.
    - expect: La vista vuelve al conjunto de incidencias correspondiente al estado sin filtros aplicados.
    - expect: La aplicación no presenta errores ni se pierde la navegación.
  4. Recargar la página del backlog.
    - expect: El backlog vuelve a cargar correctamente.
    - expect: Los filtros temporales se muestran de acuerdo con el comportamiento configurado de Jira y no hay datos corruptos ni estados inconsistentes.
