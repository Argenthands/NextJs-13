import { LikeButton } from "./LikeButton";

const url = "https://jsonplaceholder.typicode.com/posts"
const fetchPosts = () => {
    return fetch(url)
        .then(res => res.json())
}

export async function ListOfPosts() {
    const posts = await fetchPosts();
    return posts.map(post => (
        <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <LikeButton id={post.id}/>
        </article>
    ))
}