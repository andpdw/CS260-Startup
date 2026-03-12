import React from 'react';
import './createUser.css'

import { AuthState } from '../login/authState';
import { Unauthenticated } from '../login/unauthenticated';
import { Authenticated } from '../login/authenticated';

export function CreateUser() {
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <main>
      <div className="create-user-box">
        <h2>Create Login</h2>
            <form className="create-user-form" method="get" action="database">
                <div className="create-user-inputs-div">
                    <div className="create-user-input-row">
                        <span className="create-user-titles">New User:</span>
                        <input value={username} onChange={(e) => setUserName(e.target.value)} className="create-user-inputs" type="text" placeholder="username" />
                    </div>
                    <div className="create-user-input-row">
                        <span className="create-user-titles">Password:</span>
                        <input className="create-user-inputs" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <button className="create-user-button" type="button" onClick={() => createUser()}>Login</button>
                </div>
            </form>
      </div>
    </main>
  );
}