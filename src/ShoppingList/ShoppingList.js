import React, { Component } from 'react';
import ShoppingForm from './ShoppingForm';
import ShoppingItems from './ShoppingItems';

class ShoppingList extends Component {
    state = {
        value: '',
        items: [],
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    addItem = event => {
        event.preventDefault();
        this.setState(oldState => ({
            items: [...oldState.items, this.state.value],
            value: '',
        }));
    };

    deleteLastItem = event => {
        this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
    };

    inputIsEmpty = () => {
        return this.state.value === '';
    };

    noItemsFound = () => {
        return this.state.items.length === 0;
    };

    render() {
        return(
            <div className='container'>
                <h2>Shopping List</h2>
                <ShoppingForm
                    addItem={this.addItem}
                    value={this.state.value}
                    inputIsEmpty={this.inputIsEmpty}
                    handleChange={this.handleChange}
                />
                <button onClick={this.deleteLastItem} disabled={this.noItemsFound()}>
                    Delete Last Item
                </button>
                <ShoppingItems items={this.state.items}/>
            </div>
        );
    }
}

export default ShoppingList;
