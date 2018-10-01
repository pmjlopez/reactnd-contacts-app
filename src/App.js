import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI';
import CreateContact from './CreateContact';
import { Route } from 'react-router-dom';

import ShoppingList from './ShoppingList/ShoppingList';
import Echo from './Echo/Echo';
import Game from './Game/Game';
import Movies from './Movies/Movies';
import Users from './Users/Users';
import Chat from './Chat/Chat';

class App extends Component {
    state = {
        contacts: []
    };
    componentDidMount() {
        ContactsAPI
        .getAll()
        .then((contacts) => {
            this.setState(() => ({
                contacts
            }));
        })
    };
    removeContact = (contact) => {
        this.setState((currentState) => ({
            contacts: currentState.contacts.filter((c) => {
               return c.id !== contact.id;
            })
        }));
        ContactsAPI.remove(contact);
    };
    createContact = (contact) => {
        ContactsAPI.create(contact)
            .then((contact) => {
                this.setState((currentState) => ({
                    contacts: currentState.contacts.concat([contact])
                }));
            });
    };
    render() {
        return (
            <div>
                <Route exact path='/' render={() => (
                    <ListContacts
                        contacts={this.state.contacts}
                        onDeleteContact={this.removeContact}
                    />
                )}/>
                <Route path='/create' render={({ history }) => (
                    <CreateContact
                        onCreateContact={(contact) => {
                            this.createContact(contact);
                            history.push('/');
                        }}
                    />
                )}/>

                <Route path='/chat' component={Chat}/>
                <Route path='/users' component={Users}/>
                <Route path='/shopping-list' component={ShoppingList}/>
                <Route path='/echo' component={Echo}/>
                <Route path='/game' component={Game}/>
                <Route path='/movies' component={Movies}/>
            </div>
        );
    }
}

export default App;
