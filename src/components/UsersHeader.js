import { inject, observer } from 'mobx-react';
import Button from 'react-bootstrap/Button';
import React from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

const UsersHeader = ({ usersStore }) => {
    return (
        <ButtonToolbar className={'users-header__button-toolbar'}>
            <Button variant="primary" size="lg" onClick={usersStore.addUser}>
                Add User
            </Button>

            <Button variant="warning" size="lg" onClick={usersStore.clearAll}>
                Clear All
            </Button>
            {
                Boolean(usersStore.checked.size) && (
                    <Button className={'users-header__remove'} variant="danger" size="lg" onClick={usersStore.removeChecked}>
                        Remove {usersStore.checked.size} items
                    </Button>
                )
            }

        </ButtonToolbar>
    );
};

export default inject('usersStore')(observer(UsersHeader));
