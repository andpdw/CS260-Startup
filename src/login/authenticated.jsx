import React from "react";

import { AuthState } from "./authState";

export function Authenticated({userName, onAuthChange}) {

    return (
        <>
            <h2>Welcome {userName}</h2>
            <button className="login-button" onClick={() => onAuthChange(userName, AuthState.Unauthenticated)}>
                Logout
            </button>
        </>
    )
}