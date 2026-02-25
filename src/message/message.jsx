import React from 'react';
import './message.css'

import { AuthState } from '../login/authState';
import { Unauthenticated } from '../login/unauthenticated';
import { Authenticated } from '../login/authenticated';

export function Message({authState}) {
    const [username, serUserName] = React.useState(localStorage.getItem("username"));

    const [m0, setM0] = React.useState({name: "Clayton", message: "And I just got back"});
    const [m1, setM1] = React.useState({name: "Andrew", message: "I can set up your password in an hour"});
    const [m2, setM2] = React.useState({name: "Jacob", message: "This is a real message"});
    const [m3, setM3] = React.useState({name: "Jeffery", message: "I will be gone for the next 3 hours."});
    const [m4, setM4] = React.useState({name: "Carter", message: "I just need to rant for a really long time so I can see how the screen handle text that will wrap around the edge of the screen"});
    const [m5, setM5] = React.useState({name: "Clayton", message: "I will be gone for the next 2 hours."});
    const [m6, setM6] = React.useState({name: "Clayton", message: "And I just got back"});
    const [m7, setM7] = React.useState({name: "Andrew", message: "I can set up your password in an hour"});

  return (
    <main>
            <div className="messages-title">
                <h1>Messages</h1>
            </div>
            <div className="message-panel">
                <div className="message-board">
                    <div className="other-message">
                        <div className="username">
                            <span>Clayton</span>
                        </div>
                        <div className="message-text">
                            <span>I will be gone for the next 2 hours.</span>
                        </div>
                    </div>

                    <div className="other-message">
                        <div className="username">
                            <span>Carter</span>
                        </div>
                        <div className="message-text">
                            <span>I just need to rant for a really long time so I can see how the screen handle text that will wrap around the edge of the screen</span>
                        </div>
                    </div>

                    <div className="other-message">
                        <div className="username">
                            <span>Jeffery</span>
                        </div>
                        <div className="message-text">
                            <span>I will be gone for the next 3 hours.</span>
                        </div>
                    </div>

                    <div className="other-message">
                        <div className="username">
                            <span>Jacob</span>
                        </div>
                        <div className="message-text">
                            <span>This is a real message</span>
                        </div>
                    </div>

                    <div className="own-message">
                        <div className="message-text">
                            <span>I can set up your password in an hour</span>
                        </div>
                        <div className="own-name">
                            <span>You</span>
                        </div>
                    </div>

                    <div className="other-message">
                        <div className="username">
                            <span>Clayton</span>
                        </div>
                        <div className="message-text">
                            <span>And I just got back</span>
                        </div>
                    </div>

                    <div className="other-message">
                        <div className="username">
                            <span>Clayton</span>
                        </div>
                        <div className="message-text">
                            <span>I will be gone for the next 2 hours.</span>
                        </div>
                    </div>

                    <div className="other-message">
                        <div className="username">
                            <span>Carter</span>
                        </div>
                        <div className="message-text">
                            <span>I just need to rant for a really long time so I can see how the screen handle text that will wrap around the edge of the screen</span>
                        </div>
                    </div>

                    <div className="other-message">
                        <div className="username">
                            <span>Jeffery</span>
                        </div>
                        <div className="message-text">
                            <span>I will be gone for the next 3 hours.</span>
                        </div>
                    </div>

                    <div className="other-message">
                        <div className="username">
                            <span>Jacob</span>
                        </div>
                        <div className="message-text">
                            <span>This is a real message</span>
                        </div>
                    </div>

                    <div className="own-message">
                        <div className="message-text">
                            <span>I can set up your password in an hour</span>
                        </div>
                        <div className="own-name">
                            <span>You</span>
                        </div>
                    </div>

                    <div className="other-message">
                        <div className="username">
                            <span>Clayton</span>
                        </div>
                        <div className="message-text">
                            <span>And I just got back</span>
                        </div>
                    </div>
                </div>
                <div className="message-box">
                    {authState === AuthState.Authenticated && (
                        <div className="username">
                            <span>{username}: </span>
                        </div>
                    )}
                    {authState === AuthState.Unauthenticated && (
                        <div className="username">
                            <span>Guest: </span>
                        </div>
                    )}
                    <div id="message-input">
                        <textarea className="text-input" placeholder="Type message here"></textarea>
                    </div>
                    <div id="send-button">
                        <button type="button">Send Button</button>
                    </div>
                </div>
            </div>
        </main>
  );
}
