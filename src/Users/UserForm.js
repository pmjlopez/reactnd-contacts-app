import React, {Component} from 'react';

class UserForm extends Component {
    state = {
        userName: '',
        firstName: '',
        lastName: '',
        userExists: false
    };
    userExists = (userName) => {
        return this.props.users.filter((u) => (u.userName === userName));
    };
    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const user = this.userExists(this.state.userName);
        const result = user.length > 0;

        if (!result) {
            this.props.addUser({
                userName: this.state.userName,
                firstName: this.state.firstName,
                lastName: this.state.lastName
            });
            this.setState(() => ({
                userName: '',
                firstName: '',
                lastName: ''
            }));
        }

        this.setState(() => ({
            userExists: result
        }));
    };
    isDisabled = () => {
        const { userName, firstName, lastName } = this.state;
        return userName === '' || firstName === '' || lastName === '';
    };
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    placeholder='Username'
                    name="userName"
                    value={this.state.userName}
                    onChange={this.handleInputChange}
                />
                <input
                    type='text'
                    name='firstName'
                    placeholder='First Name'
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                />
                <input
                    type='text'
                    name='lastName'
                    placeholder='Last Name'
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                />
                <br/>
                <button disabled={this.isDisabled()}>
                    Add
                </button>
                {this.state.userExists ? (
                    <p className='error'>Username already exists.</p>
                ) : (
                    ''
                )}
            </form>
        );
    }
}

export default UserForm;