import React, { Component } from 'react';
import ChatMessages from './ChatMessages';
import ChatForm from './ChatForm';

class ChatWindow extends Component {
    render() {
        return(
            <div className="chat-window">
                <h2>Super Awesome Chat</h2>
                <div className="name sender">
                    {this.props.users[0].username}
                </div>

                <ChatMessages
                    messages={this.props.messages}
                    users={this.props.users}
                />

                <ChatForm
                    addMessage={this.props.addMessage}
                    users={this.props.users}
                />
            </div>
        );
    }
}

export default ChatWindow;