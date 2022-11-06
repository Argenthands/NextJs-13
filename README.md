# Proyecto de Next.js 13 Para practicar y aprender
## Pasos:
1. Crear un proyecto de Next.js
    ```bash
    npx create-next-app@latest --experimental-app
    # o
    yarn create next-app --experimental-app
    # o
    pnpm create next-app --experimental-app
    ```
2. Opciones:
    ```bash
    - nombre: "fist-app"
    - TypeScript: "false"
    - eslint: "false"
    ```
3. En el directorio [next.config.js](./first-app/next.config.js) agregar:
    ```js
    module.exports = {
      experimental: {
        esmExternals: true,
      },
    }
    ```
4. eliminar el archivo [pages/index.js](./first-app/pages/index.js) y sus estilos:
    ```bash
    rm pages/index.js
    rm styles/Home.module.css
    ```
5. Crear la carpeta [app](./first-app/app) y dentro de ella el archivo [index.js](./first-app/app/index.js)
    ```bash
    mkdir app
    touch app/index.js
    ```
6. En el archivo [app/index.js](./first-app/app/index.js) agregar:
    ```jsx
    export default function Page() {
    return <h1>My Page</h1>;
    }
    ```
7. Ejecutar
    ```bash
    npm run dev
    # o
    yarn dev
    # o
    pnpm dev
    ```
8. Abrir [http://localhost:3000](http://localhost:3000) con tu navegador para ver el resultado.