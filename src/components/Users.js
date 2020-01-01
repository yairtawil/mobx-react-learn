import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('users')
@observer
class Users extends Component {
    render() {
        const { users } = this.props;
        return (
            <ul>
                {
                    Object.values(users.users).map((user) => (<li>{user.name}</li>))
                }
            </ul>
        );
    }
}

export default Users;
