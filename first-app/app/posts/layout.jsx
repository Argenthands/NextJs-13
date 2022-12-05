import { Counter } from "./Counter";
export default function PostsLayaout({ children }) {
    return (
        <div>
            <h1>Este es el Layoit de los posts</h1>
            <Counter/>
            {children}
        </div>
    )
}