import React from "react";

import { AuthState } from "./authState";

export function Unauthenticated({userName, onAuthChange}) {
    const [username, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");
    localStorage.setItem("username", "Guest");

    async function loginUser() {
        if (username === "") {
            alert("Please Enter a username");
        } else {
            const response = await fetch('/api/auth/login', {
                method: 'post',
                body: JSON.stringify({ username: username, password: password}),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            });

            if (response?.status === 200) {
                localStorage.setItem("username", username);
                onAuthChange(username, AuthState.Authenticated);
            } else {
                const body = await response.json();
                alert(body.msg);
            }
        }
    }

    /*async function login() {
        if (username === "") {
            alert("Please Enter a username");
        } else {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password)
            onAuthChange(username, AuthState.Authenticated);
        }
    }*/

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
                        <input className="login-inputs" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <button className="login-button" type="button" onClick={() => loginUser()}>Login</button>
                </div>
            </form>

            <form className="message-form" method="get" action="message">
                <p>Click the button below to chat with Andrew to get an account</p>
                <button type="submit">Message</button>
            </form>
        </>
    )
}