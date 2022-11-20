//import { useEffect, useState } from "react";
const url = "https://jsonplaceholder.typicode.com/posts"
const fetchPosts = () => {
    return fetch(url)
            .then(res => res.json())
        }
export default async function PostPage() {
    /*
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data))
    })
    return (
        <section>
            {posts.map(post => (
                <article key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </article>
            ))}
        </section>
    )
    */
   const posts = await fetchPosts();
   return (
         <section>
            <article>
                <h2>Post</h2>
                <ol>
                    {posts.map(post => (
                        <li key={post.id}>
                            <a href={`/posts/${post.id}`}>{post.title}</a>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ol>
            </article>
        </section>
   )
}