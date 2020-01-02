import React from 'react';
import Table from 'react-bootstrap/Table';
import { inject, observer } from 'mobx-react';
import Form from 'react-bootstrap/Form';

const UsersTable = ({ usersStore }) => (
    <Table className='users__table' striped bordered hover variant="dark">
        <thead>
        <tr>
            <th>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox" onChange={usersStore.toggleAll}
                        checked={usersStore.checked.size === Object.keys(usersStore.users).length} />
                </Form.Group>
            </th>
            <th>First Name</th>
            <th>Email</th>
            <th>Country</th>
        </tr>
        </thead>
        <tbody>
        {
            Array.from(usersStore.users.values()).map(({ id, name, email, country }) => (
                <tr key={id}>
                    <td>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" onChange={usersStore.toggleCheck(id)}
                                        checked={usersStore.checked.has(id)} />
                        </Form.Group>
                    </td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{country}</td>
                </tr>
            ))
        }
        </tbody>
    </Table>
);

export default inject('usersStore')(observer(UsersTable));