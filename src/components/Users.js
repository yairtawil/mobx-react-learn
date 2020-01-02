import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import UsersTable from './UsersTable';
import UsersHeader from './UsersHeader';

//                        <li key={key} onClick={() => usersStore.addUser(faker.name.findName())}></li>)

@inject('usersStore')
@observer
class Users extends Component {
    render() {
        const { usersStore } = this.props;
        console.log('Users render', usersStore.users);

        return (
            <div>
                <UsersHeader />
                <UsersTable />
            </div>
        );
    }
}

export default Users;
