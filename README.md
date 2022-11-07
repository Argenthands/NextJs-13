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
    export default function HomePage() {
        return <h1>Home Page</h1>;
    }
    ```
7. Ejecutar
    ```bash
    cd first-app
    # y
    npm run dev
    # o
    yarn dev
    # o
    pnpm dev
    ```
8. Abrir [http://localhost:3000](http://localhost:3000) con tu navegador para ver el resultado.
9. Creando rutas:
    1. Crear la carpeta [about](./first-app/app/about) y dentro de ella el archivo [page.jsx](./first-app/app/about/page.jsx)
        ```bash
        mkdir app/About
        touch app/About/page.jsx
        ```
    2. En el archivo [app/About/page.js](./first-app/app/About/page.js) agregar:
        ```jsx
        export default function AboutPage() {
            return <h1>About Page</h1>;
        }
        ```
    3. Crear la carpeta [Contact](./first-app/app/Contact) y dentro de ella el archivo [page.jsx](./first-app/app/contact/page.jsx)
        ```bash
        mkdir app/Contact
        touch app/Contact/page.jsx
10. Crear [components](./first-app/app/components/)
    ```bash
    mkdir app/components
    ```
    1. Crear [NavBar](./first-app/app/components/NavBar)
        1. ```bash
            mkdir app/components/NavBar
            touch app/components/NavBar/index.jsx
            ```
        2. En el archivo [app/components/NavBar/index.jsx](./first-app/app/components/NavBar/index.jsx) agregar:
            ```jsx
            import Link from "next/link";
            const LINKS = [
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
            ];
            export function NavBar() {
                return (
                <nav>
                    <ul>
                    {LINKS.map(({ href, label }) => (
                        <li key={`${href}${label}`}>
                        <Link href={href}>
                            <a>{label}</a>
                        </Link>
                        </li>
                    ))}
                    </ul>
                </nav>
                );
            }
            ```
    2. Crear [Header](./first-app/app/components/Header)
        1. ```bash
            mkdir app/components/Header
            touch app/components/Header/index.jsx
            ```
        2. En el archivo [app/components/Header/index.jsx](./first-app/app/components/Header/index.jsx) agregar:
            ```jsx
            import { NavigationBar } from "../NavigationBar/NavigationBar";
            export function Header() {
                return (
                    <header>
                        <NavigationBar />
                    </header>
                );
            }
            ```
    3. Crear [Footer](./first-app/app/components/Footer)
        1. ```bash
            mkdir app/components/Footer
            touch app/components/Footer/index.jsx
            ```
        2. En el archivo [app/components/Footer/index.jsx](./first-app/app/components/Footer/index.jsx) agregar:
            ```jsx
            export function Footer() {
                return <h1>Footer</h1>;
            }
            ```