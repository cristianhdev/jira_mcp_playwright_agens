
# Requisitos del proyecto

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

## 3. Resultado esperado de la ejecución

El agente debe entregar:

- Clave Jira de la épica.
- Claves Jira de las historias.
- Claves Jira de los casos de prueba.
- Relaciones creadas y verificadas.
- Incidencias que no pudieron crearse.
- Errores o permisos faltantes.

## 4. Restricciones de seguridad

- Utilizar únicamente el proyecto autorizado.
- No mostrar contraseñas, tokens ni secretos.
- No modificar incidencias ajenas al alcance.
- No iniciar un sprint ni ejecutar cambios masivos
  sin autorización explícita.
- Si faltan permisos o herramientas, informar la limitación.
- No afirmar que una operación tuvo éxito sin verificarla.
