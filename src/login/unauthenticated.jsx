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
                const data = await response.json();

                localStorage.setItem("username", data.username);
                if (data.admin) {
                    onAuthChange(username, AuthState.Admin);
                } else {
                    onAuthChange(username, AuthState.Authenticated);
                }
            } else {
                const body = await response.json();
                alert(body.msg);
            }
        }
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
                        <input className="login-inputs" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <button className="login-button" type="button" onClick={() => loginUser()}>Login</button>
                </div>
            </form>

            <form className="message-form" method="get" action="message">
                <p>Reach out to Andrew to get an account set up</p>
            </form>
        </>
    )
}