import styles from "../posts.module.css";
export default function Posts({params}) {
    const {id} = params;
    //const url = "https://jsonplaceholder.typicode.com/posts"
    return (
        <div className={styles.Posts}>
            <h1>Posts</h1>
            <p>Post ID: {id}</p>
        </div>
    )
}