import React, { Component } from 'react'

class Echo extends Component {
    state = {
        something: ''
    };
    updateText = (something) => {
        this.setState(() => ({
            something: something
        }));
    }
    render() {
        return (
            <div className="container">
                <h2>Echo</h2>
                <input
                    type="text"
                    placeholder="Say Something"
                    value={this.state.something}
                    onChange={(event) => this.updateText(event.target.value)}
                />
                <p className="echo">Echo:</p>
                <p>{this.state.something}</p>
            </div>
        );
    }
}

export default Echo;
