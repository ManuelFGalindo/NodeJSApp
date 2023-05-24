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
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **dist**                 | Contains the distributable (or output) from your TypeScript build.  |
| **src**                  | Contains  source code that will be compiled to the dist dir                               |
| **configuration**        | Application configuration including environment-specific configs 
| **src/controllers**      | Controllers define functions to serve various express routes. 
| **src/lib**              | Common libraries to be used across your app.  
| **src/middlewares**      | Express middlewares which process the incoming requests before handling them down to the routes
| **src/routes**           | Contain all express routes, separated by module/area of application                       
| **src/models**           | Models define schemas that will be used in storing and retrieving data from Application database  |
| **src/monitoring**      | Prometheus metrics |
| **src**/index.ts         | Entry point to express app                                                               |
| package.json             | Contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped)   | tsconfig.json            | Config settings for compiling source code only written in TypeScript    
| tslint.json              | Config settings for TSLint code style checking                                                |


### Ejecutando el build de la aplicacion
All the different build steps are orchestrated via [npm scripts](https://docs.npmjs.com/misc/scripts).
Npm scripts basically allow us to call (and chain) terminal commands via npm.

| Npm Script | Description |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `start`                   | Runs full build and runs node on dist/index.js. Can be invoked with `npm start`                  |
| `build:copy`                   | copy the *.yaml file to dist/ folder      |



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
