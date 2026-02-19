import React from 'react';
import './login.css'

import { AuthState } from './authState';
import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';

export function Login({userName, authState, onAuthChange}) {
  return (
    <main>
      <div className="login-box">
        {authState === AuthState.Authenticated && (
          <Authenticated
            userName={userName}
            onAuthChange={onAuthChange}
          />
        )}
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