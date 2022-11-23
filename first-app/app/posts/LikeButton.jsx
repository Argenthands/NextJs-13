"use client";
import { useState } from "react";
export function LikeButton({ id }){
    const [like, setLike] = useState(false);

    return (
        <button onClick={() => setLike(!like)}>
            {like ? "\u2665" : "\u2661"}
        </button>
    )
}