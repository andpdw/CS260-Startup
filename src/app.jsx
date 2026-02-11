import React from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login.jsx';
import { Database } from './database/database.jsx';
import { Message } from './message/message.jsx';
import { Camera } from './camera/camera.jsx';

export default function App() {
    return (
        <BrowserRouter>
            <div className="body bg-dark text-light">
                <header>
                    <nav>
                        <h1 className="logo">N106</h1>
                        <ul>
                            <li><NavLink className="nav-bar" to="login">Home</NavLink></li>
                            <li><NavLink className="nav-bar" to="message">Message Page</NavLink></li>
                            <li><NavLink className="nav-bar" to="database">Entry Database</NavLink></li>
                            <li><NavLink className="nav-bar" to="camera">Live Camera</NavLink></li>
                        </ul>
                    </nav>
                </header>

                <Routes>
                    <Route path='/login' element={<Login />} exact />
                    <Route path='/message' element={<Message />} />
                    <Route path='/database' element={<Database />} />
                    <Route path='/camera' element={<Camera />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                
                <footer>
                    <div className="footer-left">
                        <span className="footer-top">Current Temp: 50F</span>
                        <span>Chance of Rain: 50%</span>
                    </div>
                    <div className="footer-right">
                        <div className="made-by">
                            <span className="footer-top">Made By:</span>
                            <span>Andrew Harding</span>
                        </div>
                        <div>
                            <a className="github-button" href="https://github.com/andpdw/CS260-Startup">GitHub</a>
                        </div>
                    </div>
                </footer>

            </div>
        </BrowserRouter>
    );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}