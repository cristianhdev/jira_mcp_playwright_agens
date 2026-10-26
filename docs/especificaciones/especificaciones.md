# Especificaciones funcionales y QA — [Nombre del proyecto]

## 1. Propósito y alcance

**Objetivo del documento:** [Describir qué producto o funcionalidad se especifica.]

**Alcance incluido:**
- [Funcionalidad incluida]

**Fuera de alcance:**
- [Funcionalidad excluida, si aplica]

**Fuentes de requisitos:** [Documentos, historias, archivos u otras fuentes.]

**Ambigüedades y preguntas pendientes:**
- [Registrar dudas sin convertirlas en reglas asumidas.]

## 2. Épicas

### EPIC-01 — [Nombre de la épica]

**Objetivo:** [Resultado de negocio que se busca.]

**Descripción y alcance:** [Capacidades incluidas en la épica.]

## 3. Historias de usuario

### HU-01 — [Nombre de la historia]

**Épica relacionada:** EPIC-01

**Historia:** Como [tipo de usuario], quiero [funcionalidad], para [beneficio].

**Prioridad:** [Indicar solo si la fuente la define.]

**Story points:** [Estimación, si está definida.]

**Criterios de aceptación:**
- CA-01: [Condición verificable y observable.]
- CA-02: [Condición verificable y observable.]

## 4. Casos de prueba

### TC-01 — [Nombre del caso]

**Historia relacionada:** HU-01

**Criterios de aceptación cubiertos:** CA-01

**Objetivo:** [Qué comportamiento se valida.]

**Tipo:** [Funcional / Regresión / Otro]

**Prioridad:** [Indicar solo si está definida.]

**Precondiciones:**
- [Estado necesario antes de ejecutar la prueba.]

**Datos de prueba:**
- [Datos requeridos; no incluir credenciales o secretos reales.]

**Pasos y resultados esperados:**
1. **Acción:** [Acción del usuario o del sistema.]
   **Resultado esperado:** [Respuesta observable.]
2. **Acción:** [Acción siguiente.]
   **Resultado esperado:** [Respuesta observable.]

**Resultado esperado final:** [Estado final verificable.]

**Automatizable:** [Sí / No / Por evaluar]

## 5. Trazabilidad y reglas de calidad

- Cada historia debe relacionarse con una épica.
- Cada caso de prueba debe relacionarse con una historia y señalar los criterios de aceptación que cubre.
- Los criterios y resultados esperados deben poder comprobarse objetivamente.
- Considerar escenarios positivos, negativos y límites cuando los requisitos lo justifiquen.
- No inventar reglas de negocio, prioridades, estimaciones ni resultados que no estén en las fuentes.
- Distinguir el diseño de un caso de prueba de su ejecución; no marcarlo como aprobado sin evidencia de ejecución.

## 6. Uso de esta especificación en Jira

- Confirmar el proyecto Jira solicitado y sus tipos de incidencia antes de crear elementos.
- Buscar elementos equivalentes para evitar duplicados y verificar qué relaciones permite la configuración.
- Crear o reutilizar primero la épica; después crear o reutilizar historias y casos de prueba, manteniendo las relaciones definidas en este documento.
- Registrar pasos y resultados esperados en Jira cuando el tipo de incidencia y las herramientas disponibles lo permitan.
- Informar las claves reales y verificar las relaciones después de las operaciones. No simular operaciones ni inventar claves.
- Si faltan permisos o capacidades, informar qué no se pudo realizar y por qué.
