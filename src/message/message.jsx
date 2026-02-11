import React from 'react';
import './message.css'

export function Message() {
  return (
    <main>
            <div className="messages-title">
                <h1>Messages</h1>
            </div>
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
                <div className="username">
                    <span>Andrew: </span>
                </div>
                <div id="message-input">
                    <textarea className="text-input" placeholder="Type message here"></textarea>
                </div>
                <div id="send-button">
                    <button type="button">Send Button</button>
                </div>
            </div>
        </main>
  );
}