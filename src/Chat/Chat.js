import React, { Component } from 'react';
import ChatWindow from './ChatWindow';

class Chat extends Component {
    state = {
        users: [
            { username: 'Amy' },
            { username: 'John' }
        ],
        messages : [
            { username: 'Amy', text: 'Hi, Jon!' },
            { username: 'Amy', text: 'How are you?' },
            { username: 'John', text: 'Hi, Amy! Good, you?' },
        ]
    };
    addMessage = (message) => {
        this.setState((prevState) => ({
            messages: [...prevState.messages, message]
        }));
    };
    render() {
        return(
            <div className='container'>
                <ChatWindow
                    users={this.state.users}
                    messages={this.state.messages}
                    addMessage={this.addMessage}
                />
                <ChatWindow
                    users={[
                        this.state.users[1],
                        this.state.users[0]
                    ]}
                    messages={this.state.messages}
                    addMessage={this.addMessage}
                />
            </div>
        );
    }
}

export default Chat;