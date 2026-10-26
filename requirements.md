
# Requisitos del proyecto GeekStore

## 1. Información general

- **Proyecto Jira:** [Sollicitar el nombre del proyecto]
- **Rol del agente:** QA Engineer
- **Integración:** Atlassian MCP
- **Objetivo:** Crear y relacionar épicas, historias de usuario y casos de prueba en Jira.

## 2. Reglas de ejecución

1. Consultar el proyecto Jira exista antes de crear incidencias.
2. Qué tipos de incidencias puedo crear en ese proyecto.
3. Si hay una integración de pruebas disponible, como Xray o Zephyr.
4. Si no existe intregtación de pruebas, crear los incidentes como tareas asociando la historia de usuario.
5. Qué campos y relaciones admite la configuración.
6. Verificar que no existan duplicados.
7. Crear primero la épica.
8. Crear las historias de usuario y asociarlas
   a la épica correspondiente.
9. Definir criterios de aceptación verificables.
10. Crear los casos de prueba con pasos y resultados esperados.
11. Relacionar los casos de prueba con las historias
   cuando Jira y las herramientas disponibles lo permitan.
12. Validar las incidencias creadas y sus relaciones.
13. Informar las claves Jira generadas.
14. No inventar claves, resultados ni relaciones.

## 3. Épica

### EP-01: Gestión del catálogo de productos

**Objetivo:**
Permitir que los clientes consulten los productos
disponibles en GeekStore.

**Criterios de negocio:**
- Los productos deben mostrar nombre y precio.
- Los productos disponibles deben poder consultarse.
- Los productos agotados deben identificarse claramente.

## 4. Historias de usuario

### HU-01: Consultar catálogo de productos

**Persona asignar:** Cristian A Hernandez.

**Team:** Dev's.

**Story point estimate:** 5

**Como:** cliente de GeekStore.

**Quiero:** consultar el catálogo de productos.

**Para:** identificar los productos que deseo comprar.

**Épica relacionada:** EP-01.

#### Criterios de aceptación

- CA-01: El sistema muestra los productos disponibles.
- CA-02: Cada producto muestra nombre y precio.
- CA-03: Los productos agotados se identifican como agotados.
- CA-04: Si no existen productos, se muestra un mensaje informativo.

### HU-02: Consultar detalle del producto

**Como:** cliente de GeekStore.

**Quiero:** consultar el detalle de un producto.

**Para:** conocer sus características antes de comprarlo.

**Épica relacionada:** EP-01.

#### Criterios de aceptación

- CA-01: Se muestra el nombre del producto.
- CA-02: Se muestra el precio vigente.
- CA-03: Se muestra la disponibilidad del producto.
- CA-04: Si el producto no existe, se informa al cliente.

## 5. Casos de prueba

### CP-01: Visualizar productos disponibles

**Persona asignada:** Cristian A Hernandez.

**Team:

**Tipo:** Funcional.

**Prioridad:** High.

**Precondiciones:**
- El catálogo contiene productos disponibles.
- El usuario puede acceder a GeekStore.

**Datos de prueba:**
- Producto: Teclado mecánico.
- Estado: Disponible.
- Precio: 150000 COP.

**Pasos:**
1. Ingresar a GeekStore.
2. Abrir el catálogo de productos.
3. Buscar el teclado mecánico.
4. Verificar el nombre, el precio y la disponibilidad.

**Resultado esperado:**
El producto aparece con su nombre, precio y estado correctos.


**Historia de usuario relacionada:** HU-01.

### CP-02: Identificar productos agotados

**Historia relacionada:** HU-01.

**Tipo:** Funcional.

**Prioridad:** High.

**Precondiciones:**
- Existe un producto sin unidades disponibles.

**Pasos:**
1. Ingresar al catálogo.
2. Buscar el producto agotado.
3. Verificar su estado.

**Resultado esperado:**
El producto se identifica claramente como agotado.

**Historia de usuario relacionada:** HU-01.

### CP-03: Consultar producto inexistente

**Historia relacionada:** HU-02.

**Tipo:** Negativo.

**Prioridad:** Medium.

**Pasos:**
1. Buscar un identificador de producto inexistente.
2. Consultar el detalle.

**Resultado esperado:**
El sistema informa que el producto no existe
y no presenta información incorrecta.

## 6. Relaciones requeridas en Jira

- EP-01 contiene HU-01.
- EP-01 contiene HU-02.
- HU-01 se relaciona con CP-01 y CP-02.
- HU-02 se relaciona con CP-03.

## 7. Resultado esperado de la ejecución

El agente debe entregar:

- Clave Jira de la épica.
- Claves Jira de las historias.
- Claves Jira de los casos de prueba.
- Relaciones creadas y verificadas.
- Incidencias que no pudieron crearse.
- Errores o permisos faltantes.

## 8. Restricciones de seguridad

- Utilizar únicamente el proyecto autorizado.
- No mostrar contraseñas, tokens ni secretos.
- No modificar incidencias ajenas al alcance.
- No iniciar un sprint ni ejecutar cambios masivos
  sin autorización explícita.
- Si faltan permisos o herramientas, informar la limitación.
- No afirmar que una operación tuvo éxito sin verificarla.
