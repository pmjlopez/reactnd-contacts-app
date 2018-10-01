import React, { Component } from 'react';

class AnswerButton extends Component {
    render() {
        return (
            <button onClick={() => this.props.checkAnswer(this.props.answer)}>{this.props.text}</button>
        );
    }
}

export default AnswerButton;