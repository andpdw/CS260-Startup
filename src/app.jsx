import React from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login.jsx';
import { Database } from './database/database.jsx';
import { Message } from './message/message.jsx';
import { Camera } from './camera/camera.jsx';
import { AuthState } from './login/authState.js';
import { Footer } from './footer.jsx';

export default function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    //const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const currentAuthState = AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

    return (
        <BrowserRouter>
            <div className="main-div">
                <header>
                    <nav>
                        <h1 className="logo">N106</h1>
                        <ul>
                            <li><NavLink className="nav-bar" to="">Home</NavLink></li>
                            <li><NavLink className="nav-bar" to="message">Message Page</NavLink></li>
                            <li><NavLink className="nav-bar" to="database">Entry Database</NavLink></li>
                            <li><NavLink className="nav-bar" to="camera">Live Camera</NavLink></li>
                        </ul>
                    </nav>
                </header>

                <Routes>
                    <Route path='/' element={
                        <Login
                            userName={userName}
                            authState={authState}
                            onAuthChange={(userName, authState) => {
                                setAuthState(authState);
                                setUserName(userName);
                            }}
                        />
                        }
                    exact />
                    <Route path='/message' element={
                        <Message
                            authState={authState} />}
                        />
                    <Route path='/database' element={<Database />} />
                    <Route path='/camera' element={<Camera />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                
                <Footer/>

            </div>
        </BrowserRouter>
    );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}