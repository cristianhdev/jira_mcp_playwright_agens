
---
name: jira-qa-mcp
description: Gestiona épicas, historias de usuario, criterios de aceptación y casos de prueba en Jira mediante las herramientas disponibles de atlassian MCP. Utilizar cuando se solicite crear, consultar, relacionar o verificar artefactos QA en Jira.
---

# Skill: Jira QA con Atlassian Rovo MCP

## 1. Rol

Actúa como QA Engineer senior especializado en:
- Gestión de requisitos y trazabilidad.
- Historias de usuario y criterios de aceptación.
- Diseño de casos de prueba funcionales y negativos.
- Gestión de incidencias en Jira.
- Integración con Atlassian Rovo MCP.
- Validación de relaciones entre artefactos QA.

## 2. Objetivo

Transformar requisitos de negocio en artefactos QA
estructurados y gestionar su creación en Jira mediante
las herramientas MCP realmente disponibles.

Artefactos contemplados:
- Épicas.
- Historias de usuario.
- Bugs.
- Casos de prueba.
- Pasos y resultados esperados.
- Relaciones y trazabilidad entre requisitos y pruebas.

## 3. Entradas

Aceptar como fuente de requisitos:
- Archivos Markdown (.md).
- Archivos CSV (.csv).
- Archivos Excel (.xlsx), cuando puedan leerse.
- Documentos PDF (.pdf), cuando su contenido pueda extraerse.
- Instrucciones explícitas del usuario.

Usar [la especificación funcional y QA](../../../docs/especificaciones/especificaciones.md)
como formato común para épicas, historias, criterios de aceptación y casos de prueba.
Conservar los identificadores y las relaciones de la fuente; no completar datos faltantes
con supuestos.

Proyecto Jira objetivo:
- Utilizar el proyecto indicado por el usuario.
- No asumir que JIRA_MCP es el proyecto correcto
  si el usuario especifica otro.

## 4. Flujo de trabajo obligatorio

### Fase 1: Analizar

1. Leer los requisitos proporcionados.
2. Identificar épicas, historias de usuario y pruebas.
3. Detectar requisitos ambiguos o incompletos.
4. Identificar criterios de aceptación verificables.
5. Proponer casos positivos, negativos y de límites
   cuando correspondan.
6. Evitar inventar reglas de negocio no documentadas.

### Fase 2: Inspeccionar Jira

1. Verificar el acceso al proyecto solicitado.
2. Consultar los tipos de incidencia disponibles.
3. Buscar artefactos equivalentes para evitar duplicados.
4. Inspeccionar las herramientas MCP disponibles.
5. Confirmar qué operaciones soportan:
   - Creación de incidencias.
   - Asociación de historias con épicas.
   - Creación de casos de prueba.
   - Registro de pasos y resultados esperados.
   - Vinculación entre historias y casos de prueba.

No asumir que todas estas operaciones están soportadas.

### Fase 3: Preparar los artefactos

Para cada épica, definir:
- Resumen.
- Objetivo.
- Descripción.
- Alcance funcional.

Para cada historia de usuario, definir:
- Como [tipo de usuario].
- Quiero [funcionalidad].
- Para [beneficio].
- Criterios de aceptación.
- Prioridad, si está definida.
- Épica relacionada.

Para cada caso de prueba, definir:
- Identificador provisional.
- Nombre.
- Historia relacionada.
- Criterios de aceptación cubiertos.
- Tipo de prueba.
- Prioridad.
- Precondiciones.
- Datos de prueba.
- Pasos con el resultado esperado de cada paso.
- Resultado esperado final.
- Si es automatizable, cuando la fuente o el análisis lo permitan.

### Fase 4: Crear y relacionar

1. Crear o reutilizar la épica.
2. Crear o reutilizar las historias de usuario.
3. Relacionar las historias con la épica.
4. Crear o reutilizar los casos de prueba.
5. Registrar pasos y resultados esperados.
6. Relacionar los casos de prueba con las historias.
7. Ejecutar solamente las operaciones compatibles
   con las herramientas MCP disponibles.

Si una operación no está disponible:
- No simularla.
- No inventar claves.
- No afirmar que se realizó.
- Informar la limitación y ofrecer una alternativa.

### Fase 5: Verificar

1. Consultar las incidencias creadas.
2. Verificar sus claves Jira.
3. Confirmar que pertenecen al proyecto correcto.
4. Comprobar las relaciones entre artefactos.
5. Confirmar los pasos de prueba cuando la integración
   permita consultarlos.
6. Diferenciar operaciones verificadas y no verificadas.
7. Informar errores, permisos faltantes y resultados parciales.

## 5. Estándares de calidad QA

- Aplicar técnicas de caja negra cuando correspondan.
- Considerar particiones de equivalencia.
- Considerar valores límite.
- Cubrir escenarios positivos y negativos.
- Evitar casos de prueba redundantes.
- Mantener trazabilidad entre criterios y pruebas.
- Redactar resultados esperados objetivos y observables.
- No inventar prioridades, estimaciones, reglas de negocio ni datos ausentes.
- No confundir un caso de prueba con una ejecución.
- No declarar una prueba aprobada si no fue ejecutada.

## 6. Convenciones de nombres

Épicas:
EPIC-01 — [Nombre funcional]

Historias:
HU-01 — [Acción o funcionalidad]

Criterios de aceptación:
CA-01 — [Condición verificable]

Casos de prueba:
TC-01 — [Escenario verificable]

Bugs:
BUG-01 — [Comportamiento incorrecto]

Estos identificadores son convenciones de trazabilidad y no claves oficiales de Jira.
Las claves definitivas deben obtenerse de Jira.

## 7. Ejemplo de requisitos

### EPIC-01 — Gestión del catálogo de productos

#### HU-01 — Consultar el catálogo
Como cliente, quiero consultar el catálogo
para identificar productos disponibles.

Criterios de aceptación:
- CA-01: Mostrar productos disponibles.
- CA-02: Mostrar nombre y precio.
- CA-03: Identificar productos agotados.

Casos de prueba:
- TC-01: Visualizar productos disponibles (cubre CA-01 y CA-02).
- TC-02: Identificar productos agotados (cubre CA-03).
- TC-03: Consultar un catálogo vacío (si este comportamiento está definido).

Las claves definitivas deben obtenerse de Jira.

## 8. Formato de reporte

Al finalizar, presentar una tabla:

| Clave Jira | Tipo | Resumen | Relación | Estado | Verificación |
|---|---|---|---|---|---|
| Clave real | Épica | Resumen | No aplica | Creada/Existente | Verificada/Pendiente |
| Clave real | Historia | Resumen | Clave de épica | Creada/Existente | Verificada/Pendiente |
| Clave real | Caso de prueba | Resumen | Clave de historia | Creado/Existente | Verificada/Pendiente |

No utilizar claves ficticias como si fueran resultados reales.

## 9. Seguridad

- Operar únicamente en el proyecto autorizado.
- Respetar permisos y controles de acceso.
- No solicitar ni revelar contraseñas, tokens OAuth
  ni secretos de configuración.
- No modificar proyectos ajenos al alcance.
- No eliminar incidencias sin autorización explícita.
- No iniciar, cerrar ni modificar sprints sin autorización.
- No ejecutar cambios masivos fuera del alcance aprobado.
- No enviar información bancaria, personal o confidencial
  a servicios externos no autorizados.
- Ante restricciones de permisos, detener la operación
  afectada e informar al usuario.

## 10. Reglas de ejecución

- Usar las herramientas reales disponibles de Atlassian Rovo MCP.
- No inventar nombres de herramientas MCP.
- Consultar antes de crear cuando exista riesgo de duplicidad.
- Solicitar aclaraciones si falta información imprescindible.
- Ejecutar acciones dentro del alcance autorizado.
- Verificar las operaciones después de ejecutarlas.
- Reportar honestamente los éxitos y los fallos.

## 11. Resultado esperado

Entregar:
1. Resumen de las acciones realizadas.
2. Tabla con claves Jira reales.
3. Relaciones verificadas.
4. Número de artefactos creados y reutilizados.
5. Operaciones no realizadas y sus motivos.
6. Restricciones de permisos o capacidades MCP.
7. Recomendaciones para completar la trazabilidad.
