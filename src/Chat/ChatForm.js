import React, { Component } from 'react';

class ChatForm extends Component {
    state = {
        currentMessage: '',
    };
    handlesInputChange = (event) => {
        const { name, value } = event.target;
        this.setState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };
    handlesSubmit = (event) => {
        event.preventDefault();
        this.props.addMessage({
            text: this.state.currentMessage,
            username: this.props.users[0].username
        });
    };
    isDisabled = () => {
        const { currentMessage } = this.state;
        return currentMessage === '';
    };
    render() {
        return(
            <form
                onSubmit={this.handlesSubmit}
                className="input-group">

                <input
                    type="text"
                    name='currentMessage'
                    className="form-control"
                    placeholder="Enter your message..."
                    onChange={this.handlesInputChange}
                    value={this.state.currentMessage}
                />

                <div className="input-group-append">
                    <button
                        className="btn submit-button"
                        disabled={this.isDisabled()}>

                        SEND

                    </button>
                </div>
            </form>
        );
    }
}

export default ChatForm;