import React, { Component } from 'react';

class UserList extends Component {
    state = {
        showPlays: true
    };
    togglePlays = () => {
        this.setState((prevState) => ({
            showPlays: !prevState.showPlays
        }));
    }
    render() {
        return(
            <div>
                <ul className='contact-list'>
                    {this.props.users.map((user) => (
                        <li
                            className='contact-list-item'
                            key={user.userName}>
                            {user.userName}
                            {this.state.showPlays ? (
                                <span>&nbsp;played {user.plays} games.</span>
                            ) : (
                                ''
                            )}
                        </li>
                    ))}
                </ul>
                <p>
                    <label>
                        <input
                            type='checkbox'
                            value={this.state.showPlays}
                            onChange={this.togglePlays}
                        /> Show the Number of Games Played
                    </label>
                </p>
            </div>
        );
    }
}

export default UserList;