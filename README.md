# Pro Cube

[Visita la aplicación en procube.axford.dev](https://procube.axford.dev)

## ¿Qué es Pro Cube?

Pro Cube es una aplicación web que permite a los usuarios crear y gestionar cubos de Rubik virtuales.
Para el cubo de Rubik se ha utilizado el Web Component, creado por mí, de [web-cube](https://github.com/mraxf/web-vube), que permite crear cubos de cualquier tamaño e interactuar con ellos.

![Pro Cube](/app1.gif)

Te permite crear y editar cubos de Rubik, desde un cubo de tamaño 2x2 hasta el tamaño 4x4, pudiendo personalizar los colores.

![Pro Cube](/app2.gif)

A la hora de hacer uso de tu cubo, puedes girar el cubo y girar sus caras. También puedes ver los movimientos que has realizado desde el historial y volver a cualquier estado anterior. Además, se incluyen funciones para mezclar el cubo y para devolverlo a su estado original.

![Pro Cube](/app3.gif)

## Ejecución en local

Para ejecutar la aplicación en local, asegúrate de tener instalado [Node.js](https://nodejs.org) y [pnpm](https://pnpm.io).

Clona el repositorio e instala las dependencias:

```bash
pnpm install
```

A continuación, debes crear una instancia de desarrollo de [Clerk](https://clerk.com) y añadir las variables de entorno necesarias en un archivo `.env` en la raíz del proyecto. Puedes usar el archivo `.env.example` como referencia.

A continuación, en Clerk, debes añadir un webhook para los eventos `user.created`, `user.updated`, `user.deleted` y `session.created`. Para conectar con el localhost debes usar algún servicio como [ngrok](https://ngrok.com/), para crear un túnel a tu localhost. Al configurar el webhook, asegúrate de que la URL del webhook apunte a `https://<tunnel-url>/api/clerk-webhook`. En el caso de ngrok, si usas la versión gratuita, deberás incluir la cabecera correspondiente para evitar la pantalla de verificación de ngrok. Por último, obtén el token secreto del webhook y añádelo a tu archivo `.env`. También deberás editar el archivo `nuxt.config.ts` y añadir la URL del túnel en la propiedad `vite.server.allowedHosts` (verás que está comentada).

A continuación, debemos crear la base de datos. Para ello, dale a la variable `NUXT_LIBSQL_URL` de tu `.env` el valor que viene en el archivo `.env.example`. A continuación, ejecuta el siguiente comando para crear la base de datos:

```bash
pnpm db:push
```

Una vez creada la base de datos, puedes ejecutar el siguiente comando para iniciar la aplicación:

```bash
pnpm dev
```

Por último, si ya tienes usuarios creados en Clerk, puedes ir a las herramientas de desarrollo de [Nuxt](https://nuxt.com), ir al apartado de `Server tasks` y ejecutar la tarea `seed` para crear los usuarios en la base de datos. Si no tienes usuarios creados, puedes omitir este paso y crear los usuarios desde la aplicación.

## ¿Cómo se ha usado Clerk?

El servicio de Clerk se ha usado para proporcionar a la aplicación una capa de autenticación, protegiendo el acceso a la página principal de la aplicación y protegiendo el uso de la API a la hora de gestionar cubos.

Además, se hace uso de webhooks para sincronizar los usuarios de Clerk con la base de datos de la aplicación y se hace uso de la API de Clerk para obtener los datos de los usuarios y realizar el `seed` de la base de datos.
