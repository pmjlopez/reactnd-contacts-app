import React, { Component } from 'react';

class ShoppingForm extends Component {
    render() {
        return(
            <form onSubmit={this.props.addItem}>
                <input
                    type="text"
                    placeholder="Enter New Item"
                    value={this.props.value}
                    onChange={this.props.handleChange}
                />
                <button disabled={this.props.inputIsEmpty()}>Add</button>
            </form>
        );
    }
}

export default ShoppingForm;
