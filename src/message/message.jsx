import React from 'react';
import './message.css'

import { AuthState } from '../login/authState';
import { Unauthenticated } from '../login/unauthenticated';
import { Authenticated } from '../login/authenticated';
import { MessageBox } from './messageBox';

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
    const [m8, setM8] = React.useState({name: "Carter", message: "I just need to rant for a really long time so I can see how the screen handle text that will wrap around the edge of the screen"});
    const [m9, setM9] = React.useState({name: "Clayton", message: "I will be gone for the next 2 hours."});
    const [m10, setM10] = React.useState({name: "Clayton", message: "And I just got back"});
    const [m11, setM11] = React.useState({name: "", message: ""});

  return (
    <main>
            <div className="messages-title">
                <h1>Messages</h1>
            </div>
            <div className="message-panel">
                <div className="message-board">
                    <MessageBox
                        messageUserName={m11.name}
                        messageData={m11.message}
                    />

                    <MessageBox
                        messageUserName={m10.name}
                        messageData={m10.message}
                    />

                    <MessageBox
                        messageUserName={m9.name}
                        messageData={m9.message}
                    />

                    <MessageBox
                        messageUserName={m8.name}
                        messageData={m8.message}
                    />

                    <MessageBox
                        messageUserName={m7.name}
                        messageData={m7.message}
                    />

                    <MessageBox
                        messageUserName={m6.name}
                        messageData={m6.message}
                    />

                    <MessageBox
                        messageUserName={m5.name}
                        messageData={m5.message}
                    />

                    <MessageBox
                        messageUserName={m4.name}
                        messageData={m4.message}
                    />

                    <MessageBox
                        messageUserName={m3.name}
                        messageData={m3.message}
                    />

                    <MessageBox
                        messageUserName={m2.name}
                        messageData={m2.message}
                    />

                    <MessageBox
                        messageUserName={m1.name}
                        messageData={m1.message}
                    />

                    <MessageBox
                        messageUserName={m0.name}
                        messageData={m0.message}
                    />
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
