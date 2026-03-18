import React from "react";

import { AuthState } from "./authState";

export function Authenticated({userName, onAuthChange}) {

    async function logoutUser() {
        const response = await fetch("/api/auth/logout", {
            method: "delete",
        })
        .catch(() => {})
        .finally(() => {
            localStorage.setItem("username", "Guest");
            onAuthChange(userName, AuthState.Unauthenticated);
        });
    }

    return (
        <>
            <h2>Welcome {userName}!</h2>
            <button className="logout-button" onClick={() => {
                onAuthChange(userName, AuthState.Unauthenticated)
                logoutUser()}}>
                Logout
            </button>
        </>
    )
}