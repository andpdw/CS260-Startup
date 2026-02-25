import React from "react";

export function messageBox({messageUserName, messageData}) {

    const [username, updateUsername] = React.userState(localStorage.getItem("username"));

    return (
        <div> 
            {username !== messageUserName && (
                <div className="other-message">
                    <div className="username">
                        <span>{messageUserName}</span>
                    </div>
                    <div className="message-text">
                        <span>{messageData}</span>
                    </div>
                </div>
            )}
        { username === messageUserName && (
            <div className="own-message">
                <div className="message-text">
                    <span>{messageData}</span>
                </div>
                <div className="own-name">
                    <span>You</span>
                </div>
            </div>
        )}
        </div>
        
    )
}