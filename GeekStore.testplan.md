# Plan de pruebas funcionales — GeekStore

## 1. Épicas

### EPIC-01 — Acceso y cuenta de cliente

**Objetivo:** permitir que los clientes accedan a una cuenta y administren sus datos.

**Descripción:** cubre el acceso desde la página de inicio, el registro de cuentas con validación y la actualización del perfil autenticado.

### EPIC-02 — Catálogo y productos

**Objetivo:** permitir explorar, buscar y personalizar los productos disponibles.

**Descripción:** cubre la visualización del catálogo, búsqueda y filtros, y la configuración de computadoras y cámaras con sus precios, descuentos y validaciones.

### EPIC-03 — Lista de deseos

**Objetivo:** permitir a los clientes autenticados guardar y administrar productos de interés.

**Descripción:** cubre visibilidad de la opción según la sesión, acceso a la lista desde la tienda y altas y bajas de productos.

### EPIC-04 — Carrito y pago

**Objetivo:** permitir preparar y pagar una compra con los productos deseados.

**Descripción:** cubre acceso autenticado al carrito, administración de productos y cantidades, envoltura de regalo, cálculo del total, validación de dirección y pago, y confirmación de compra.

### EPIC-05 — Historial de órdenes

**Objetivo:** permitir que el cliente autenticado consulte sus compras anteriores.

**Descripción:** cubre el acceso al historial y la consulta de los datos de cada orden y de todos los artículos adquiridos.

## 2. Historias de usuario

### HU-01 — Iniciar sesión

**Épica relacionada:** EPIC-01

**Historia:** Como cliente, quiero poder iniciar sesión para acceder a mi cuenta y realizar compras.

**Prioridad:** No especificada en la fuente
**Story points:** No especificados en la fuente

**Criterios de aceptación:**
- CA-01.1: La página de inicio presenta una opción de Login.
- CA-01.2: Al activar Login, el cliente es dirigido a la página de inicio de sesión.

### HU-02 — Crear una cuenta y actualizar el perfil

**Épica relacionada:** EPIC-01

**Historia:** Como cliente, quiero registrarme para poder realizar compras y agregar artículos a mi lista de deseos.

**Prioridad:** No especificada en la fuente
**Story points:** No especificados en la fuente

**Criterios de aceptación:**
- CA-02.1: El registro solicita, como mínimo, teléfono, email, nombre de usuario y contraseña.
- CA-02.2: Los campos validan que los datos ingresados sean correctos.
- CA-02.3: El nombre de usuario debe ser único.
- CA-02.4: El registro solicita confirmación de contraseña y valida que coincida con la contraseña.
- CA-02.5: Un usuario autenticado puede actualizar los datos personales de su perfil.

### HU-03 — Ver productos

**Épica relacionada:** EPIC-02

**Historia:** Como cliente, quiero ver los productos disponibles en la tienda en línea para explorar y comprar.

**Prioridad:** No especificada en la fuente
**Story points:** No especificados en la fuente

**Criterios de aceptación:**
- CA-03.1: La página de inicio muestra una lista de productos populares o recomendados.
- CA-03.2: Cada producto presenta una imagen de alta calidad y, cuando sea posible, varias imágenes.
- CA-03.3: Se muestra el nombre y el precio de cada artículo.

### HU-04 — Buscar productos

**Épica relacionada:** EPIC-02

**Historia:** Como cliente, quiero buscar productos por nombre o categoría para encontrar lo que necesito rápidamente.

**Prioridad:** No especificada en la fuente
**Story points:** No especificados en la fuente

**Criterios de aceptación:**
- CA-04.1: La búsqueda devuelve resultados precisos y pertinentes para la consulta.
- CA-04.2: Los productos se pueden buscar y filtrar por categoría, marca, precio y otras características disponibles.

### HU-05 — Personalizar productos

**Épica relacionada:** EPIC-02

**Historia:** Como cliente, quiero cambiar características técnicas de ciertos artículos para ajustarlos a mis necesidades.

**Prioridad:** No especificada en la fuente
**Story points:** No especificados en la fuente

**Criterios de aceptación:**
- CA-05.1: La computadora se puede configurar con procesador, sistema operativo (OS), SSD y memoria RAM.
- CA-05.2: La computadora con procesador Intel y Linux recibe un descuento del 5% sobre su precio.
- CA-05.3: La computadora con procesador AMD y Linux recibe un descuento del 10% sobre su precio.
- CA-05.4: Para la computadora, una RAM de 4 a 8 GB aumenta el precio en USD 50.
- CA-05.5: Para la computadora, una RAM de 9 a 15 GB aumenta el precio en USD 150.
- CA-05.6: Para la computadora, una RAM menor de 4 GB o mayor de 16 GB muestra un error.
- CA-05.7: La cámara Nikon D550 recibe un descuento del 5% con lente Sony y al menos 2 baterías extra.
- CA-05.8: La cámara Nikon D550 recibe un descuento del 10% con lente Nikon y al menos 2 baterías extra.
- CA-05.9: Para la cámara, una selección de RAM de 1 a 6 GB aumenta el precio en USD 80.
- CA-05.10: Para la cámara, una selección de RAM mayor o igual a 6 GB muestra un error.
- CA-05.11: Solo se puede agregar el artículo al carrito cuando todos los campos obligatorios estén completos.

### HU-06 — Administrar la lista de deseos

**Épica relacionada:** EPIC-03

**Historia:** Como cliente, quiero agregar productos a mi lista de deseos para guardarlos y consultarlos más tarde.

**Prioridad:** No especificada en la fuente
**Story points:** No especificados en la fuente

**Criterios de aceptación:**
- CA-06.1: La opción de agregar a deseos requiere autenticación; en la página de producto no se muestra a usuarios no autenticados.
- CA-06.2: El cliente autenticado puede acceder a su lista desde cualquier página de la tienda.
- CA-06.3: El cliente puede agregar productos a la lista y eliminarlos de ella.

### HU-07 — Administrar el carrito

**Épica relacionada:** EPIC-04

**Historia:** Como cliente autenticado, quiero agregar productos a mi carrito de compras para poder realizar compras.

**Prioridad:** No especificada en la fuente
**Story points:** No especificados en la fuente

**Criterios de aceptación:**
- CA-07.1: Se requiere iniciar sesión para agregar productos al carrito.
- CA-07.2: El cliente puede cambiar la cantidad de un artículo y el precio correspondiente se actualiza.
- CA-07.3: El cliente puede eliminar artículos del carrito.
- CA-07.4: Se puede seleccionar envoltura de regalo por un costo adicional de USD 10.
- CA-07.5: El carrito actualiza los precios y muestra el total, incluidos los costos adicionales.
- CA-07.6: La página de producto presenta un botón visible para agregar al carrito.
- CA-07.7: El cliente puede acceder al carrito desde cualquier página de la tienda.

### HU-08 — Pagar una compra

**Épica relacionada:** EPIC-04

**Historia:** Como cliente autenticado, quiero pagar los productos de mi carrito para recibirlos en mi domicilio.

**Prioridad:** No especificada en la fuente
**Story points:** No especificados en la fuente

**Criterios de aceptación:**
- CA-08.1: El cliente puede abrir la página de pago desde el carrito.
- CA-08.2: La página de direcciones permite ingresar dirección de facturación y email del titular de la tarjeta, y valida campos vacíos y caracteres especiales.
- CA-08.3: Solo se permite pagar con tarjeta de crédito; se validan número, vencimiento válido, CVV de 3 dígitos y código postal de 5 dígitos.
- CA-08.4: Después de un pago exitoso se muestra número, estado y fecha de la orden, además de los artículos comprados.
- CA-08.5: La página de pago es comprensible para el cliente.
- CA-08.6: La información de pago se puede ingresar de manera segura y protegida.
- CA-08.7: Una compra procesada exitosamente produce una confirmación clara.

### HU-09 — Consultar órdenes

**Épica relacionada:** EPIC-05

**Historia:** Como cliente autenticado, quiero ver mi historial de órdenes para consultar productos adquiridos anteriormente.

**Prioridad:** No especificada en la fuente
**Story points:** No especificados en la fuente

**Criterios de aceptación:**
- CA-09.1: El cliente autenticado puede abrir la página de órdenes desde el menú superior.
- CA-09.2: Cada orden muestra número, estado, detalles de los productos, fecha y email.
- CA-09.3: El historial muestra todos los artículos adquiridos en las compras del cliente.

## 3. Casos de prueba

### TC-01 — Navegar al inicio de sesión desde la página de inicio

**Historia relacionada:** HU-01 — Iniciar sesión
**Objetivo:** validar que la opción Login está disponible y lleva a la página de acceso.

**Precondiciones:**
- La tienda está disponible.
- Se inicia una sesión de navegador nueva.

**Datos de prueba:** ninguno.

**Pasos:**
1. Abrir la página de inicio de GeekStore.
2. Verificar que la opción Login esté visible.
3. Activar Login.

**Resultado esperado:** se muestra la página de inicio de sesión.

**Tipo:** Funcional
**Automatizable:** Sí, tras confirmar los selectores y la URL de destino.

### TC-02 — Validar campos obligatorios y formato durante el registro

**Historia relacionada:** HU-02 — Crear una cuenta y actualizar el perfil
**Objetivo:** comprobar los campos mínimos y las validaciones de datos del registro.

**Precondiciones:**
- La página de registro es accesible desde la tienda.
- Se dispone de una cuenta de prueba nueva o datos controlados autorizados.

**Datos de prueba:**
- Teléfono, email, nombre de usuario y contraseña de prueba.
- Variantes vacías y formatos inválidos para cada campo.

**Pasos:**
1. Abrir el registro y verificar que solicite teléfono, email, nombre de usuario y contraseña.
2. Intentar enviar el formulario con los campos obligatorios vacíos, individualmente y en conjunto.
3. Ingresar valores con formato inválido en los campos que validan formato.
4. Corregirlos con valores válidos y completar los demás campos obligatorios.
5. Enviar el formulario con datos válidos.

**Resultado esperado:** los campos mínimos están presentes; entradas vacías o inválidas se rechazan con validación visible y datos válidos permiten continuar o completar el registro según la aplicación. No se presume una política de contraseña que no esté especificada.

**Tipo:** Funcional
**Automatizable:** Sí, con datos de prueba y reglas de formato confirmadas.

### TC-03 — Rechazar un nombre de usuario duplicado

**Historia relacionada:** HU-02 — Crear una cuenta y actualizar el perfil
**Objetivo:** verificar que el nombre de usuario no se pueda reutilizar.

**Precondiciones:**
- Existe una cuenta de prueba con un nombre de usuario conocido.
- Se puede abrir un registro nuevo sin iniciar sesión.

**Datos de prueba:** nombre de usuario ya registrado y datos ficticios para los demás campos.

**Pasos:**
1. Abrir el registro.
2. Ingresar el nombre de usuario existente y completar los demás campos con datos válidos.
3. Enviar el formulario.

**Resultado esperado:** el registro no crea una segunda cuenta con el mismo nombre de usuario y comunica que el nombre no está disponible o es duplicado.

**Tipo:** Funcional
**Automatizable:** Sí, si la cuenta de prueba se mantiene controlada.

### TC-04 — Validar confirmación de contraseña

**Historia relacionada:** HU-02 — Crear una cuenta y actualizar el perfil
**Objetivo:** comprobar que el registro solicite confirmación y rechace contraseñas diferentes.

**Precondiciones:**
- El registro está disponible.

**Datos de prueba:** contraseña ficticia y una confirmación distinta; luego, una confirmación idéntica.

**Pasos:**
1. Verificar que el formulario solicite confirmación de contraseña.
2. Completar los campos con contraseñas distintas e intentar enviar.
3. Corregir la confirmación para que coincida e intentar enviar de nuevo.

**Resultado esperado:** las contraseñas diferentes no permiten completar el registro; la coincidencia elimina ese error de validación. No se debe registrar ni reportar la contraseña en claro.

**Tipo:** Funcional
**Automatizable:** Sí.

### TC-05 — Actualizar los datos personales del perfil

**Historia relacionada:** HU-02 — Crear una cuenta y actualizar el perfil
**Objetivo:** verificar que un usuario autenticado pueda modificar sus datos personales.

**Precondiciones:**
- Existe una cuenta de prueba autenticada.
- Se conocen los datos editables del perfil.

**Datos de prueba:** valores ficticios válidos diferentes de los datos actuales.

**Pasos:**
1. Abrir el perfil de la cuenta autenticada.
2. Cambiar uno o más datos personales permitidos.
3. Guardar los cambios.
4. Volver a consultar el perfil.

**Resultado esperado:** los cambios se guardan y se muestran al volver al perfil; los datos que no se modificaron permanecen iguales.

**Tipo:** Funcional / Regresión
**Automatizable:** Sí, una vez confirmados los campos editables.

### TC-06 — Mostrar productos populares con información básica

**Historia relacionada:** HU-03 — Ver productos
**Objetivo:** comprobar que la página de inicio presente productos y sus datos principales.

**Precondiciones:**
- El catálogo de prueba contiene productos publicados.

**Datos de prueba:** productos populares o recomendados existentes en el entorno.

**Pasos:**
1. Abrir la página de inicio.
2. Localizar la lista de productos populares o recomendados.
3. Para cada producto mostrado, revisar imagen, nombre y precio.
4. Abrir las imágenes disponibles adicionales, cuando existan.

**Resultado esperado:** se presenta la lista; cada artículo muestra imagen, nombre y precio. Las imágenes cargan correctamente y, cuando el producto ofrece varias, se pueden consultar. La calificación de “alta calidad” no es medible con los criterios recibidos y debe definirse si se requiere una validación objetiva.

**Tipo:** Funcional
**Automatizable:** Parcialmente; la carga y presencia de elementos sí, la calidad visual requiere criterio acordado.

### TC-07 — Buscar productos por nombre y categoría

**Historia relacionada:** HU-04 — Buscar productos
**Objetivo:** comprobar que las búsquedas por nombre y categoría produzcan resultados relevantes.

**Precondiciones:**
- El catálogo contiene al menos un producto conocido por nombre y productos de una categoría conocida.

**Datos de prueba:** nombre completo, fragmento de nombre y categoría existentes; consulta sin coincidencias.

**Pasos:**
1. Buscar un producto usando su nombre completo.
2. Repetir la búsqueda usando un fragmento del nombre.
3. Buscar usando una categoría existente.
4. Buscar una consulta sin coincidencias.

**Resultado esperado:** los resultados corresponden con la consulta y categoría; la búsqueda sin coincidencias no muestra productos ajenos a la consulta y comunica el estado vacío de forma comprensible.

**Tipo:** Funcional
**Automatizable:** Sí, con catálogo de prueba estable. La relevancia debe evaluarse contra resultados esperados definidos.

### TC-08 — Filtrar productos por atributos disponibles

**Historia relacionada:** HU-04 — Buscar productos
**Objetivo:** validar filtros por categoría, marca, precio y otras características que ofrezca la tienda.

**Precondiciones:**
- Hay productos de distintas categorías, marcas y precios en el catálogo.
- Los filtros están disponibles en la página de productos.

**Datos de prueba:** una categoría, marca, intervalo de precio y característica con productos conocidos.

**Pasos:**
1. Aplicar un filtro de categoría y verificar los resultados.
2. Aplicar un filtro de marca y verificar los resultados.
3. Aplicar un intervalo de precio y verificar que los precios mostrados estén dentro del intervalo.
4. Aplicar una característica adicional disponible.
5. Combinar filtros y limpiar los filtros aplicados.

**Resultado esperado:** cada resultado satisface todos los filtros activos; al limpiar filtros, vuelve el conjunto sin filtrar. Si algún filtro no existe en la interfaz, registrar la limitación en vez de asumir que está implementado.

**Tipo:** Funcional
**Automatizable:** Sí, tras identificar filtros disponibles y datos del catálogo.

### TC-09 — Configurar computadora y comprobar descuentos por combinación

**Historia relacionada:** HU-05 — Personalizar productos
**Objetivo:** validar las opciones de configuración de computadora y descuentos por procesador y sistema operativo.

**Precondiciones:**
- El artículo Build your own computer está disponible.
- Se conoce su precio base y se pueden seleccionar procesador, OS, SSD y RAM.

**Datos de prueba:**
- Configuración Intel + Linux.
- Configuración AMD + Linux.
- Una configuración de control con OS distinto de Linux para verificar que no se aplique el descuento indicado para Linux.

**Pasos:**
1. Abrir la computadora configurable y verificar que se puedan seleccionar procesador, OS, SSD y RAM.
2. Seleccionar Intel y Linux y calcular el precio mostrado.
3. Comparar con el precio base y verificar el descuento.
4. Cambiar a AMD manteniendo Linux y verificar el descuento correspondiente.
5. Seleccionar un OS distinto de Linux y comprobar el precio respecto del precio base.

**Resultado esperado:** la configuración permite seleccionar las cuatro características; Intel + Linux descuenta 5%, AMD + Linux descuenta 10% y no se aplica ninguno de esos descuentos con otro OS. El cálculo se compara con el precio base mostrado y el redondeo vigente de la tienda.

**Tipo:** Funcional
**Automatizable:** Sí, cuando el precio base y las reglas de redondeo estén confirmados.

### TC-10 — Validar recargos y límites de RAM de computadora

**Historia relacionada:** HU-05 — Personalizar productos
**Objetivo:** comprobar los dos niveles de recargo y el rechazo de valores indicados como inválidos.

**Precondiciones:**
- La computadora configurable está disponible y permite ingresar o elegir los valores de RAM.

**Datos de prueba:** 4, 8, 9, 15 GB; un valor menor que 4 GB y uno mayor que 16 GB. El valor de 16 GB queda pendiente de aclaración.

**Pasos:**
1. Seleccionar 4 GB y verificar el precio.
2. Seleccionar 8 GB; luego 9 GB y 15 GB; verificar el precio en cada caso.
3. Seleccionar un valor menor que 4 GB e intentar continuar.
4. Seleccionar un valor mayor que 16 GB e intentar continuar.
5. Si el control permite 16 GB, registrar el resultado sin asumir un recargo.

**Resultado esperado:** entre 4 y 8 GB inclusive se agrega USD 50; entre 9 y 15 GB inclusive se agrega USD 150; menos de 4 GB y más de 16 GB muestran un error. La fuente no define el precio/comportamiento de exactamente 16 GB; debe aclararse antes de aprobar ese límite.

**Tipo:** Funcional
**Automatizable:** Sí para las reglas definidas; por evaluar para 16 GB hasta aclarar la especificación.

### TC-11 — Comprobar descuentos de la cámara por lente y baterías

**Historia relacionada:** HU-05 — Personalizar productos
**Objetivo:** validar los descuentos de la cámara Nikon D550 para las combinaciones de lente y baterías extra.

**Precondiciones:**
- La cámara Nikon D550 está disponible y se puede consultar su precio base.

**Datos de prueba:** lente Sony y Nikon, con 1 y 2 baterías extra.

**Pasos:**
1. Seleccionar lente Sony y 2 baterías extra; comprobar el precio.
2. Cambiar a lente Nikon manteniendo 2 baterías extra; comprobar el precio.
3. Para cada lente, seleccionar 1 batería extra y comprobar si se aplica un descuento.

**Resultado esperado:** con lente Sony y al menos 2 baterías se aplica 5%; con lente Nikon y al menos 2 baterías se aplica 10%. Con menos de 2 baterías no se aplica el descuento descrito. Se compara contra el precio base y el redondeo confirmado.

**Tipo:** Funcional
**Automatizable:** Sí, una vez confirmados precio base y opciones de batería.

### TC-12 — Validar selección de RAM para la cámara Nikon D550

**Historia relacionada:** HU-05 — Personalizar productos
**Objetivo:** comprobar el recargo documentado y detectar la condición contradictoria en el límite de 6 GB.

**Precondiciones:**
- La cámara Nikon D550 está disponible y la opción de RAM permite los valores de prueba.

**Datos de prueba:** 1 GB, 5 GB, exactamente 6 GB y un valor mayor que 6 GB.

**Pasos:**
1. Seleccionar 1 GB y comprobar el precio.
2. Seleccionar 5 GB y comprobar el precio.
3. Probar exactamente 6 GB y registrar el precio, error o disponibilidad de selección.
4. Probar un valor mayor que 6 GB y registrar la validación.

**Resultado esperado:** los valores de 1 a 6 GB están documentados con un recargo de USD 80, pero también se indica que los valores mayores o iguales a 6 GB deben mostrar un error. Por ello, 6 GB tiene resultados esperados contradictorios y queda pendiente de aclaración; para valores mayores de 6 GB se espera un error. No aprobar el caso de límite de 6 GB hasta que el responsable de producto confirme la regla.

**Tipo:** Funcional
**Automatizable:** Parcialmente; el caso exacto de 6 GB está bloqueado por ambigüedad.

### TC-13 — Impedir agregar configuraciones incompletas al carrito

**Historia relacionada:** HU-05 — Personalizar productos
**Objetivo:** verificar que una computadora o cámara no se agregue si faltan campos obligatorios.

**Precondiciones:**
- Está disponible al menos un artículo configurable.
- Se identificaron los campos obligatorios en la interfaz.

**Datos de prueba:** configuración incompleta omitiendo, individualmente, cada campo obligatorio; configuración completa válida.

**Pasos:**
1. Abrir el artículo configurable.
2. Dejar vacío un campo obligatorio e intentar agregarlo al carrito.
3. Repetir para cada campo obligatorio.
4. Completar todos los campos con valores válidos e intentar agregar el artículo.

**Resultado esperado:** mientras falte un campo obligatorio, el artículo no se agrega y la interfaz informa qué falta o lo marca claramente. Con todos los campos completos, se permite agregarlo. La lista de campos obligatorios debe confirmarse con la implementación.

**Tipo:** Funcional
**Automatizable:** Sí, después de identificar los campos obligatorios.

### TC-14 — Ocultar la opción de lista de deseos a usuarios no autenticados

**Historia relacionada:** HU-06 — Administrar la lista de deseos
**Objetivo:** verificar la restricción de la opción de lista de deseos para usuarios sin sesión.

**Precondiciones:**
- Sesión de navegador sin autenticación.
- Producto disponible en el catálogo.

**Datos de prueba:** un producto publicado.

**Pasos:**
1. Abrir la página del producto sin iniciar sesión.
2. Buscar la opción para agregarlo a la lista de deseos.

**Resultado esperado:** no se muestra la opción para agregar a deseos a un usuario no autenticado, según el criterio BDD de la fuente.

**Tipo:** Funcional
**Automatizable:** Sí.

### TC-15 — Agregar y eliminar productos de la lista de deseos

**Historia relacionada:** HU-06 — Administrar la lista de deseos
**Objetivo:** validar que un cliente autenticado pueda administrar los productos de su lista.

**Precondiciones:**
- Cuenta de prueba autenticada.
- Lista de deseos disponible y producto que no esté ya en ella.

**Datos de prueba:** un producto de prueba.

**Pasos:**
1. Abrir la página de un producto.
2. Agregarlo a la lista de deseos.
3. Abrir la lista y verificar que el producto aparezca.
4. Eliminar el producto.
5. Volver a consultar la lista.

**Resultado esperado:** el producto aparece después de agregarlo y deja de aparecer después de eliminarlo.

**Tipo:** Funcional
**Automatizable:** Sí.

### TC-16 — Acceder a la lista de deseos desde distintas páginas

**Historia relacionada:** HU-06 — Administrar la lista de deseos
**Objetivo:** verificar el acceso persistente a la lista desde páginas de la tienda.

**Precondiciones:**
- Cuenta de prueba autenticada.
- Lista de deseos accesible.

**Datos de prueba:** páginas de inicio, categoría y detalle de producto disponibles.

**Pasos:**
1. Abrir cada una de las páginas de prueba.
2. Desde cada página, usar la opción de navegación a la lista de deseos.

**Resultado esperado:** desde cada página de la tienda se puede acceder a la lista de deseos del usuario autenticado.

**Tipo:** Funcional / Regresión
**Automatizable:** Sí.

### TC-17 — Requerir autenticación para agregar al carrito y mostrar la acción

**Historia relacionada:** HU-07 — Administrar el carrito
**Objetivo:** verificar que el detalle del producto muestre la acción y se respete la autenticación.

**Precondiciones:**
- Producto disponible.
- Se puede probar con sesión autenticada y no autenticada.

**Datos de prueba:** un producto disponible.

**Pasos:**
1. Abrir el producto sin autenticación y comprobar la presencia del botón para agregar al carrito.
2. Intentar agregarlo sin iniciar sesión.
3. Iniciar sesión y abrir el mismo producto.
4. Activar el botón para agregar al carrito.

**Resultado esperado:** la página presenta un botón claramente visible. Sin autenticación, no se completa la acción de agregar y se solicita acceso o se bloquea según el comportamiento de la tienda; autenticado, el producto puede agregarse. La fuente no define si el botón se oculta o redirige para usuarios no autenticados, así que registrar el comportamiento sin asumirlo.

**Tipo:** Funcional
**Automatizable:** Sí, después de confirmar el flujo de autenticación requerido.

### TC-18 — Agregar productos y abrir el carrito desde la tienda

**Historia relacionada:** HU-07 — Administrar el carrito
**Objetivo:** comprobar que un cliente autenticado pueda agregar un producto y acceder al carrito desde distintas páginas.

**Precondiciones:**
- Cuenta de prueba autenticada.
- Carrito de prueba vacío.
- Producto no configurable o configuración completa válida.

**Datos de prueba:** un producto publicado.

**Pasos:**
1. Agregar el producto al carrito desde su página.
2. Verificar que la tienda confirme la acción o actualice el indicador del carrito.
3. Navegar a varias páginas de la tienda.
4. Desde cada página, abrir el carrito.

**Resultado esperado:** el producto está en el carrito y se puede acceder al carrito desde cualquier página probada de la tienda.

**Tipo:** Funcional
**Automatizable:** Sí.

### TC-19 — Actualizar cantidades y precio del carrito

**Historia relacionada:** HU-07 — Administrar el carrito
**Objetivo:** comprobar que el precio se actualice al cambiar la cantidad.

**Precondiciones:**
- Cuenta autenticada.
- Carrito con un producto cuyo precio unitario se conoce.

**Datos de prueba:** cantidad inicial 1 y cantidades válidas distintas de 1.

**Pasos:**
1. Abrir el carrito y anotar el precio y cantidad iniciales.
2. Cambiar la cantidad del artículo.
3. Confirmar o esperar la actualización del carrito.
4. Comparar el precio calculado con el precio unitario por la cantidad seleccionada.

**Resultado esperado:** la cantidad se conserva y el subtotal/precio correspondiente se actualiza correctamente.

**Tipo:** Funcional / Regresión
**Automatizable:** Sí, con los impuestos, moneda y reglas de redondeo del entorno conocidos.

### TC-20 — Eliminar artículos del carrito

**Historia relacionada:** HU-07 — Administrar el carrito
**Objetivo:** verificar que se pueda eliminar un producto del carrito.

**Precondiciones:**
- Cuenta autenticada.
- Carrito con al menos un artículo.

**Datos de prueba:** artículo agregado al carrito.

**Pasos:**
1. Abrir el carrito.
2. Eliminar el artículo.
3. Consultar el contenido y total del carrito.

**Resultado esperado:** el artículo eliminado deja de mostrarse y el total se actualiza. Si era el único artículo, el carrito muestra su estado vacío.

**Tipo:** Funcional
**Automatizable:** Sí.

### TC-21 — Aplicar envoltura de regalo y recalcular el total

**Historia relacionada:** HU-07 — Administrar el carrito
**Objetivo:** validar el costo adicional de envoltura de regalo y el total del carrito.

**Precondiciones:**
- Cuenta autenticada.
- Carrito con un artículo de precio conocido.
- Opción de envoltura de regalo disponible.

**Datos de prueba:** artículo con envoltura desactivada y activada.

**Pasos:**
1. Consultar el total del artículo sin envoltura.
2. Activar la envoltura de regalo.
3. Comparar el nuevo total con el total anterior.
4. Desactivar la envoltura y comprobar que se retire el costo adicional.

**Resultado esperado:** la envoltura agrega USD 10 al total y el carrito muestra el importe actualizado, incluidos los costos adicionales. Al desactivarla, se elimina el recargo. Impuestos u otros cargos no descritos se consideran por separado según reglas confirmadas del entorno.

**Tipo:** Funcional
**Automatizable:** Sí, tras confirmar cómo se presenta el cargo en la tienda.

### TC-22 — Navegar del carrito a la página de pago

**Historia relacionada:** HU-08 — Pagar una compra
**Objetivo:** verificar que el pago se pueda iniciar desde el carrito.

**Precondiciones:**
- Cuenta autenticada.
- Carrito con un artículo válido.

**Datos de prueba:** carrito de prueba con artículo disponible.

**Pasos:**
1. Abrir el carrito.
2. Seleccionar la acción para continuar al pago.
3. Revisar que la página indique claramente que se está en el flujo de pago, qué pedido se pagará y cómo continuar.

**Resultado esperado:** se abre la página de pago correspondiente al carrito. La página identifica claramente el paso actual, el pedido y la acción para continuar, sin requerir inferir qué debe hacer el cliente.

**Tipo:** Funcional
**Automatizable:** Sí.

### TC-23 — Validar dirección de facturación y email del titular

**Historia relacionada:** HU-08 — Pagar una compra
**Objetivo:** comprobar la validación de campos requeridos, caracteres especiales y email.

**Precondiciones:**
- Cuenta autenticada y carrito con productos.
- Página de pago abierta.

**Datos de prueba:** campos vacíos, dirección con caracteres especiales válidos según la regla del producto, email con formato válido e inválido.

**Pasos:**
1. Intentar continuar con la dirección y el email vacíos.
2. Completar la dirección con una variante que contenga caracteres especiales y continuar.
3. Ingresar un email con formato inválido e intentar continuar.
4. Ingresar un email válido del titular de tarjeta de prueba y continuar.

**Resultado esperado:** los campos vacíos e email inválido se validan y no permiten avanzar. La dirección acepta o rechaza caracteres especiales de acuerdo con la regla que confirme el producto, sin pérdida silenciosa de datos. El criterio recibido no especifica qué caracteres especiales son válidos; confirmar esa regla antes de cerrar el caso.

**Tipo:** Funcional
**Automatizable:** Parcialmente; requiere una definición de caracteres permitidos.

### TC-24 — Validar método y datos de tarjeta de crédito

**Historia relacionada:** HU-08 — Pagar una compra
**Objetivo:** verificar que se acepte solo tarjeta de crédito y se validen los formatos de pago.

**Precondiciones:**
- Cuenta autenticada, carrito válido y datos de facturación completados.
- Entorno de pruebas de pago autorizado; no utilizar tarjetas reales.

**Datos de prueba:**
- Tarjeta de prueba autorizada documentada para el entorno.
- Variantes con número inválido, vencimiento pasado o inválido, CVV de longitud distinta a 3 y código postal de longitud distinta a 5.

**Pasos:**
1. Revisar los métodos de pago disponibles.
2. Intentar continuar con un método que no sea tarjeta de crédito, si la interfaz lo ofrece.
3. Probar número de tarjeta inválido.
4. Probar fecha de vencimiento inválida o pasada.
5. Probar CVV con menos y más de 3 dígitos.
6. Probar código postal con menos y más de 5 dígitos.
7. Ingresar los datos de una tarjeta de prueba autorizada y formatos válidos para los campos.
8. Confirmar que la página de pago se sirve mediante HTTPS y que la información de tarjeta no aparece en la URL ni se reproduce en la confirmación visible.

**Resultado esperado:** solo se permite tarjeta de crédito; los datos inválidos no permiten procesar el pago y producen validaciones claras. Los formatos válidos permiten continuar con el procesamiento de prueba. La página de pago usa HTTPS y no expone los datos de tarjeta en la URL ni en la confirmación visible. Verificar en un entorno autorizado, sin guardar ni imprimir datos de tarjeta en reportes.

**Tipo:** Funcional / Seguridad de datos de pago
**Automatizable:** Sí para validaciones de interfaz; el procesamiento requiere un entorno de pago de pruebas.

### TC-25 — Completar una compra y verificar la confirmación

**Historia relacionada:** HU-08 — Pagar una compra
**Objetivo:** validar el resultado de pago y los datos de confirmación de la orden.

**Precondiciones:**
- Cuenta de prueba autenticada.
- Carrito, dirección y datos de pago de prueba válidos.
- Pasarela de pago configurada en modo de pruebas.

**Datos de prueba:** compra de prueba con uno o más artículos; datos de pago de prueba autorizados.

**Pasos:**
1. Completar el flujo de pago con datos válidos de prueba.
2. Confirmar la compra una sola vez.
3. Revisar la confirmación presentada.

**Resultado esperado:** se informa claramente que la compra fue procesada y se muestran número, estado y fecha de la orden y los artículos comprados. No se deben considerar aprobados resultados que no puedan verificarse en la interfaz o en el sistema de prueba.

**Tipo:** Funcional
**Automatizable:** Sí, con pasarela de pruebas y mecanismos para limpiar o identificar órdenes de prueba.

### TC-26 — Consultar el historial y detalle de órdenes

**Historia relacionada:** HU-09 — Consultar órdenes
**Objetivo:** verificar acceso desde el menú y la información de las órdenes del cliente.

**Precondiciones:**
- Cuenta de prueba autenticada.
- La cuenta tiene al menos una orden completada con varios artículos.

**Datos de prueba:** orden creada por la cuenta en el entorno de pruebas.

**Pasos:**
1. Abrir la página de órdenes desde el menú superior.
2. Localizar la orden de prueba.
3. Comprobar número, estado, fecha y email.
4. Abrir el detalle y comparar los artículos con los comprados.
5. Si existen varias órdenes, verificar que se muestren los artículos de todas ellas.

**Resultado esperado:** la cuenta puede acceder al historial desde el menú; cada orden muestra número, estado, fecha, email y detalles de productos; todos los artículos comprados están visibles en el historial.

**Tipo:** Funcional / Regresión
**Automatizable:** Sí, con órdenes de prueba identificables y datos controlados.

## 4. Consideraciones importantes

### Trazabilidad

- Cada historia está asociada a una única épica y tiene casos relacionados.
- Los identificadores EPIC, HU, CA y TC de este documento son identificadores de trazabilidad del plan; **no son claves Jira**.
- La fuente incluye un criterio de deseos que menciona agregar productos al carrito; se interpretó como un error de redacción y se tomó el contexto de HU-06 y sus escenarios BDD como la intención de agregar/eliminar productos de la lista de deseos. Confirmar con producto antes de registrar o automatizar en Jira.

**Matriz de cobertura de criterios de aceptación:**

| Criterios | Casos de prueba |
|---|---|
| CA-01.1–CA-01.2 | TC-01 |
| CA-02.1–CA-02.2 | TC-02 |
| CA-02.3 | TC-03 |
| CA-02.4 | TC-04 |
| CA-02.5 | TC-05 |
| CA-03.1–CA-03.3 | TC-06 |
| CA-04.1 | TC-07 |
| CA-04.2 | TC-08 |
| CA-05.1–CA-05.3 | TC-09 |
| CA-05.4–CA-05.6 | TC-10 |
| CA-05.7–CA-05.8 | TC-11 |
| CA-05.9–CA-05.10 | TC-12 |
| CA-05.11 | TC-13 |
| CA-06.1 | TC-14 |
| CA-06.2 | TC-16 |
| CA-06.3 | TC-15 |
| CA-07.1, CA-07.6 | TC-17 |
| CA-07.2 | TC-19 |
| CA-07.3 | TC-20 |
| CA-07.4–CA-07.5 | TC-21 |
| CA-07.7 | TC-18 |
| CA-08.1 | TC-22 |
| CA-08.2 | TC-23 |
| CA-08.3, CA-08.6 | TC-24 |
| CA-08.4, CA-08.7 | TC-25 |
| CA-08.5 | TC-22, TC-23 |
| CA-09.1–CA-09.3 | TC-26 |

### Pendientes de aclaración

- **Computadora:** el comportamiento para exactamente 16 GB de RAM no queda definido por los intervalos de recargo (4–8, 9–15) ni por los límites de error (menor de 4, mayor de 16).
- **Cámara:** exactamente 6 GB queda simultáneamente dentro del intervalo que agrega USD 80 (1–6) y dentro del intervalo que debe mostrar un error (mayor o igual a 6).
- **Cámara:** confirmar que el requisito de RAM corresponde realmente a la configuración de Nikon D550.
- **Dirección:** precisar cuáles caracteres especiales se aceptan o rechazan.
- **Catálogo:** definir un criterio verificable para “imagen de alta calidad”, si se requiere comprobar calidad y no solo carga/presencia.
- **Relevancia de búsqueda:** definir los resultados esperados para consultas representativas.
- **Precios y pago:** confirmar impuestos, redondeo, moneda y comportamiento de la pasarela de prueba.
- Prioridades y story points no aparecen en la hoja; quedan como “No especificados”, sin asignaciones inventadas.

### Reglas de ejecución y restricciones

- Este documento es un test plan; no se crearon incidencias ni se consultó o modificó Jira.
- Antes de registrar el plan en Jira, confirmar el proyecto autorizado y su clave, los tipos de incidencia permitidos, si hay integración de pruebas (por ejemplo, Xray o Zephyr), los campos y relaciones disponibles, y que no existan duplicados.
- Si no hay integración de pruebas, crear casos como tareas solo si la configuración y las autorizaciones del proyecto lo permiten, y asociarlos a sus historias.
- Crear primero las épicas, después las historias vinculadas y finalmente los casos vinculados cuando la configuración lo admita. Verificar las incidencias y relaciones creadas antes de informar claves.
- No se deben inventar claves, relaciones ni resultados de ejecución. No modificar incidencias fuera del alcance, iniciar sprints ni realizar cambios masivos sin autorización explícita.
- Usar exclusivamente cuentas, productos, órdenes y medios de pago ficticios/autorizados en un entorno de pruebas. No incluir contraseñas, tokens, secretos ni datos de pago reales en evidencias o reportes.
