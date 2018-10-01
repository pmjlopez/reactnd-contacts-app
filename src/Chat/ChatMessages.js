import React, { Component } from 'react';

class ChatMessages extends Component {
    render() {
        const messages = this.props.messages;
        const users = this.props.users;
        return(
            <ul className="message-list">
                {messages.map((message, index) => (
                    <li
                        key={index}
                        className={
                            message.username === users[0].username ? 'message sender' : 'message recipient'
                        }
                    >
                        <p>{`${message.username}: ${message.text}`}</p>
                    </li>
                ))}
            </ul>
        );
    }
}

export default ChatMessages;