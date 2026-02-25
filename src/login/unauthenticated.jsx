import React from "react";

import { AuthState } from "./authState";

export function Unauthenticated({userName, onAuthChange}) {
    const [username, setUserName] = React.useState('');

    async function login() {
        localStorage.setItem('userName', username);
        onAuthChange(username, AuthState.Authenticated);
    }

    return (
        <>
            <h2>Login</h2>

            <form className="login-form" method="get" action="database">
                <div className="login-inputs-div">
                    <div className="login-input-row">
                        <span className="login-titles">Username:</span>
                        <input value={username} onChange={(e) => setUserName(e.target.value)} className="login-inputs" type="text" placeholder="username" />
                    </div>
                    <div className="login-input-row">
                        <span className="login-titles">Password:</span>
                        <input className="login-inputs" type="password" placeholder="password" />
                    </div>
                </div>
                <div>
                    <button className="login-button" type="button" onClick={() => login()}>Login</button>
                </div>
            </form>

            <form className="message-form" method="get" action="message">
                <p>Click the button below to chat with Andrew to get an account</p>
                <button type="submit">Message</button>
            </form>
        </>
    )
}