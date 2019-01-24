# Descripción general del proyecto-
 Es un gran riesgo perder cualquier documento oficial que contenga nuestros datos personales, como pasaporte, visas, INE, etc. En el caso del _pasaporte_ existen graves consecuencias, desde no poder regresar a tu país, hasta la usurpación de datos personales para usos delictivos, las estadísticas del *INEGI* apropósito del “Día internacional contra la corrupción” dice que *700 personas acuden diario a la reposición de su pasaporte y 30% de estas personas, tienen problemas legales que no cometieron*.
 Es por eso que hemos creado un cifrado de datos oficiales, donde desde la _Secretaria de Relaciones Exteriores_ se encripten  los datos del solicitante, mediante nuestra  aplicación web implementada en la página oficial y estas claves serán impresas en el papel.
Lo único que debes hacer como el que solicita los documentos, es ingresar un *número único*, para tu encriptación de datos, solo tú sabrás ese número. Al momento de
ocupar tu pasaporte, escribirás el número y así podrás desencriptar tu información  y acreditar tu identidad.

# DEFINICIÓN DE OBJETIVOS
El usuario puede solicitar la encriptación de datos personales a través de la web ---.
Que el usuario pueda escoger el número de cifrado.
El cliente pueda cifrar datos personales y descifrar los mismos a través  de la web.
Resolución del problema
Evitar el mal uso de documentos extraviados.

# USUARIOS DE PRODUCTO
Solicitantes de encriptación de datos.
Datos Generales Genero: Ambos sexos Rango de Edad: cualquier edad  Rango de Ingresos: nivel económico, bajo-medio medio-alto Localización geográfica: Ciudad de México.

# PROPUESTA
Una aplicación web en donde el usuario pueda resguardar sus datos, y que el cliente (servidor público) pueda acceder directamente al cifrador y ambos logren sencillamente encriptar y descencriptar los datos.
# DISEÑO
Se busca que sea una página clara y precisa, ordenada, con pocas instrucciones, que directamente accedas a la caja de encriptación y desencriptación, lo cual la hace intuitiva para el usuario y manejable para el cliente. El diseño es sencillo y se resaltan los botones, con el fin de que el usuario y el cliente, puedan localizarlos rápidamente, al final solo se  imprimirá en  tus documentos.

#  Distribución del sitio
Titulo centrado
Caja de texto en medio: se escriben los datos personales
Abajo corredor de espacios: el usuario escoge su número
Después botón de cifrar y descifrar: el texto se puede cifrar y descifrar
Resultado: Datos encriptados

# Como accedes a la Web
Desde tu tramite de pasaporte en la _Secretaria de Relaciones Exteriores_.


#### Interfaz de usuario (UI)

La interfaz debe permitir al usuario:
- Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos que el cifrado desplace cada caracter.
- Insertar un mensaje (texto) que queremos cifrar.
- Ver el resultado del mensaje cifrado.
- Insertar un mensaje (texto) a descifrar.
- Ver el resultado del mensaje descifrado.


#### Scripts / Archivos

* `README.md`: debe explicar cómo descargar, instalar y ejecutar la aplicación
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.
* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  debe contener tu _markup_ (HTML) e incluir el CSS y JavaScript necesario.
* `src/cipher.js`: acá debes implementar el objeto cipher, el cual debe estar
  _exportado_ en el objeto global (`window`). Este objeto (`cipher`) debe
  contener dos métodos:
  - `cipher.encode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
    que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la izquierda en el alfabeto y `string` el mensaje
    (texto) que queremos descifrar.
* `src/index.js`: acá debes escuchar eventos del DOM, invocar `cipher.encode()`
  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.
* `test/cipher.spec.js`: este archivo contiene algunos tests de ejemplo y acá
  tendrás que implementar los tests(pruebas ) para `cipher.encode()` y `cipher.decode()`.
