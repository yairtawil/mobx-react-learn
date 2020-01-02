import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import faker from 'faker';
import UsersTable from './UsersTable';
import Form from 'react-bootstrap/Form';
import UsersHeader from './UsersHeader';

//                        <li key={key} onClick={() => usersStore.addUser(faker.name.findName())}></li>)

@inject('usersStore')
@observer
class Users extends Component {
    CLASS_NAME = 'users__';

    addUser = () => {
        const { usersStore } = this.props;
        usersStore.addUser(faker.name.findName());
    };

    removeUser = (userName) => () => {
        const { usersStore } = this.props;
        usersStore.removeUser(userName);
    };

    directModify = () => {
        const { usersStore } = this.props;
        usersStore.users = {};
    };

    clearAll = () => {
        const { usersStore } = this.props;
        usersStore.clearAll();
    };

    render() {
        return (
            <div>
                <UsersHeader />
                <UsersTable />
            </div>
        );
    }
}

export default Users;
