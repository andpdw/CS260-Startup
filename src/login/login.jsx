import React from 'react';
import './login.css'

import { AuthState } from './authState';
import { Unauthenticated } from './unauthenticated';

export function Login({userName, authState, onAuthChange}) {
  return (
    <main>
      <div className="login-box">
        {authState === AuthState.Authenticated && <h1>Logged in</h1>}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onAuthChange={onAuthChange}
          />
        )}
      </div>
    </main>
  );
}