import React from 'react';
import Table from 'react-bootstrap/Table';
import { inject, observer } from 'mobx-react';
import Form from 'react-bootstrap/Form';

const UsersTable = ({ usersStore }) => {
    return (
        <Table className='users__table' striped bordered hover variant="dark">
            <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Email</th>
                <th>Country</th>


            </tr>
            </thead>
            <tbody>
            {
                Object.values(usersStore.users).map(({ id, name, email, country }) => (
                    <tr key={id}>
                        <td>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" />
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
};

export default inject('usersStore')(observer(UsersTable));