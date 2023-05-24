# Aplicacion de NodeJS con mongoDB

Este proyecto consiste en una aplicación de Node.js con mongoDB, esta aplicación se toma de un [proyecto guiado](https://www.coursera.org/projects/containerize-full-stack-nodejs-application-in-docker) de Coursera. Básicamente es un blog simple que permite a los usuarios ingresar sus nombres y comentarios. Utiliza el marco de aplicación web Express, la base de datos MongoDB y el motor de plantillas EJS. 

# Pre-requisitos
- Instalar [Node.js](https://nodejs.org/en/) version 18.16.0
- Instalar Docker:
  - [Docker](https://docs.docker.com/desktop/install/windows-install/) para Windows, en este caso tambien se instala la herramienta de docker compose
  - [Docker](https://docs.docker.com/engine/install/ubuntu/) para Ubuntu
  - [Docker compose](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04) para Ubuntu
 

# Instalacion

#### Instalacion local

Si se quiere instalar y ejecutar la aplicación localmente, sin necesidad de despliegue a través de Jenkins, se debe seguir estos pasos:

1. Clonar el repositorio
````
git clone https://github.com/JulianMolina99/NodeJSApp.git
````

2. Navegar al directorio actual de la aplicacion.
````
cd "Install Application"
````

3. Construir y ejecutar el proyecto utilizando Docker Compose.
````
docker-compose up --build
````
4. Navegar a http://localhost:3001

#### Despliegue en Jenkins
Si se desea desplegar la aplicación mediante Jenkins, se debe utilizar los archivos Docker y Docker Compose que se encuentran en la raíz del proyecto. Estos están configurados para trabajar con las variables de entorno y otros aspectos específicos del pipeline en Jenkins.

## Estructura del proyecto
La estructura de carpetas de esta aplicación se explica a continuación:

| Nombre | Descripcion |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **coverage**             | Contiene el informe de cobertura de las pruebas del codigo fuente realizado por Jest.  |
| **dist**                 | Contiene el distribuible (o salida) de la compilacion del codigo fuente con Parcel.   |
| **src**                  | Contiene el codigo fuente de la aplicacion                               |
| **src/__test__**         | Contiene los archivos para realizar pruebas unitarias del codigo fuente.      |                
| **src/models**           | Los modelos definen esquemas que se utilizarán para almacenar y recuperar datos de la base de datos de la aplicación.  |
| **src/views**            | Contiene las plantillas de la aplicación que se renderizarán en el cliente, en este caso, la plantilla index.ejs. |
| **src**/index.js         | Configura y define las rutas de la aplicación Express. También establece la conexión con MongoDB.|
| **src**/server.js        | Punto de entrada de la aplicación. Inicia el servidor y escucha en el puerto especificado.  |
| .gitignore               | Especifica los archivos y directorios que Git debe ignorar al realizar un commit.  |
| Jenkinsfile              | Este Jenkinsfile invoca una funcion de librerias compartidas de Jenkins que realiza el pipeline de CI/CD de la aplicacion. |
| docker-compose.yml       | Define los servicios, redes y volúmenes de la aplicación para Docker Compose. |
| dockerfile               | Define los pasos para construir la imagen Docker de la aplicación.   |
| package-lock.json        | Mantiene un registro exacto de las dependencias y versiones instaladas por npm en el momento de su creación. |   
| package.json             | Define las dependencias del proyecto, los scripts de construcción y otros metadatos del proyecto. | 
| test-report.xml          | Contiene el informe de las pruebas unitarias realizadas en el código fuente. |

### Scripts NPM

Todos los diferentes pasos de construcción están orquestados mediante [scripts de npm](https://docs.npmjs.com/misc/scripts).
Los scripts de npm básicamente nos permiten llamar (y encadenar) comandos de terminal a través de npm.

| Script de Npm | Descripción |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `start`                   | Ejecuta el archivo index.js de la carpeta src con Node.js. Se puede invocar con `npm start` |
| `test`                     | Ejecuta las pruebas unitarias con Jest, genera un informe de cobertura y procesa los resultados de las pruebas con jest-sonar-reporter. Se puede invocar con `npm test` |
| `build`                   | Construye la aplicación con Parcel, utilizando el archivo index.js de la carpeta src como entrada. Se puede invocar con `npm run build` |

### Dependencias de desarrollo

Las dependencias de desarrollo son módulos que solo se requieren durante el desarrollo de la aplicación, no cuando la aplicación ya está en producción. Estas son las dependencias de desarrollo de tu proyecto:

- **browserify-zlib**: Proporciona una implementación de zlib para su uso con Browserify.
- **chokidar**: Proporciona una interfaz de programación para observar los cambios en los archivos y directorios.
- **jest**: Un marco de pruebas unitarias para JavaScript.
- **jest-junit**: Un informe de JUnit para Jest, útil para integraciones de CI/CD.
- **jest-sonar-reporter**: Genera informes de pruebas compatibles con SonarQube.
- **parcel-bundler**: Un empaquetador de aplicaciones web, muy útil para la construcción de proyectos JavaScript modernos.
- **supertest**: Proporciona una abstracción de alto nivel para probar las API HTTP.


## Testing
The tests are  written in Mocha and the assertions done using Chai

```
"mocha": "3.4.2",
"chai": "4.1.2",
"chai-http": "3.0.0",

```

### Ejecucion de tests usando scripts de NPM

````
npm run test
````
Test files are created under test folder.


### Hecho con


### Autores


### Licencia
