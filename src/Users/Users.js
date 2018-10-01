import React, { Component } from 'react';
import UserList from './UserList';
import UserForm from './UserForm';

class Users extends Component {
    state = {
        users: [
            {
                userName: 'mike.lopez',
                firstName: 'Paul Michael John',
                lastName: 'Lopez',
                plays: 10
            }
        ]
    };
    addUser = (user) => {
        user.plays = 0;
        this.setState((prevState) => ({
            users: [...prevState.users, user]
        }));
    };
    render() {
        return(
            <div className='container'>
                <h2>Users</h2>
                <UserForm users={this.state.users} addUser={this.addUser}/>
                <UserList users={this.state.users}/>
            </div>
        );
    }
}

export default Users;