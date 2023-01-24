import React, { useEffect } from "react";
import { useState } from "react";

function Toggle() {
    const [toggle, setToogle] = useState (false)
    return (
        <>
            <h1>Toggle</h1>

            <div className="container">
                <button onClick={() => setToogle(!toggle)}>
                    contenu
                </button>
                {
                    toggle ? <p>Ici du texte pour dire que tout est ok</p> : null
                }
            </div>
        </>
    )
} 

export default Toggle