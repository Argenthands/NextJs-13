"use client";
import { useState } from "react";
import { PopUp } from "../components/PopUp/PopUp";
export function Show({id, title, body}) {
    const [showPopUp, setShowPopUp] = useState(false);
    return (
        <>
            <button onClick={() => setShowPopUp(
                id,
                title,
                body
            )}>Show More</button>
            <PopUp show={showPopUp} close={setShowPopUp}>
            </PopUp>
        </>
    )
}
