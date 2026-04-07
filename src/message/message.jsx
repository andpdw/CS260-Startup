import React from 'react';
import './message.css'

import { AuthState } from '../login/authState';
import { MessageBox } from './messageBox';
import { MessageEvent, MessageNotifier } from './messageNotifier';

export function Message({authState}) {
    const [username, setUserName] = React.useState(localStorage.getItem("username"));
    const [messageText, setText] = React.useState("");

    const [m0, setM0] = React.useState({name: "", message: ""});
    const [m1, setM1] = React.useState({name: "", message: ""});
    const [m2, setM2] = React.useState({name: "", message: ""});
    const [m3, setM3] = React.useState({name: "", message: ""});
    const [m4, setM4] = React.useState({name: "", message: ""});
    const [m5, setM5] = React.useState({name: "", message: ""});
    const [m6, setM6] = React.useState({name: "", message: ""});
    const [m7, setM7] = React.useState({name: "", message: ""});
    const [m8, setM8] = React.useState({name: "", message: ""});
    const [m9, setM9] = React.useState({name: "", message: ""});

    const setMessagesFuncs = [
        setM0, setM1, setM2, setM3, setM4, setM5, setM6, setM7, setM8, setM9
    ];

    React.useEffect(() => {
        getMessages();
    }, []);

    async function sendMessage(name, message) {
        const currentTime = new Date();
        const newMessage = {name: name, message: message, time: currentTime.toISOString()};
        await fetch("/api/message", {
            method: "POST",
            headers: {"content-type": "application/json" },
            body: JSON.stringify(newMessage),
        });
        setText("");
        getMessages();
        MessageNotifier.broadcastEvent(username, MessageEvent.Message, "Message Sent");
    }

    async function getMessages() {
        const response = await fetch("/api/message");

        if (response?.status === 200) {
            const data = await response.json();

            for (let i = 0; i < data.length; i++) {
                setMessagesFuncs[i]({
                    name: data[i].name,
                    message: data[i].message
                })
            }

        }
    }

    return (
        <main>
            <div className="messages-title">
                <h1>Messages</h1>
            </div>
            <div className="message-panel">
                <div className="message-board">
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
                        <textarea className="text-input" placeholder="Type message here" value={messageText} onChange={(e) => setText(e.target.value)}></textarea>
                    </div>
                    <div id="send-button">
                        <button type="button" onClick={() => sendMessage(username, messageText)}>Send Button</button>
                    </div>
                </div>
            </div>
        </main>
    );
}
