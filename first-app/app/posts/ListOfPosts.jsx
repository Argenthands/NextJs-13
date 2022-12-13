import { LikeButton } from "./LikeButton";
import { Show } from "./Show";
import Link from "next/link";

const url = "https://jsonplaceholder.typicode.com/posts"

const fetchPosts = () => {

    // getStaticProps
    // return fetch(url).then(res => res.json())

    // getServerSideProps
    //return fetch(url, { cache: "no-store" }).then(res => res.json())

    // Incremental static regeneration
    return fetch(url , {
        next: {
            revalidate: 60 
        } 
    })
        .then(res => res.json())
}

export async function ListOfPosts() {
    const posts = await fetchPosts();
    return posts.map(post => (
        <article key={post.id}>
            <Link href='/posts/[id]' as={`/posts/${post.id}`}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </Link>
                <Show id={post.id} title={post.title} body={post.body}/>
                <LikeButton id={post.id}/>
        </article>
    ))
}