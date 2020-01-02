import { inject, observer } from 'mobx-react';
import Button from 'react-bootstrap/Button';
import React, { useCallback } from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

const UsersHeader = ({ usersStore }) => {
    const addUser = useCallback(() => {
        usersStore.addUser();
    }, [usersStore]);

    const clearAll = useCallback(() => {
        usersStore.clearAll();
    }, [usersStore]);

    return (
        <ButtonToolbar>
            <Button variant="primary" size="lg" onClick={addUser}>
                Add User
            </Button>

            <Button variant="warning" size="lg" onClick={clearAll}>
                Clear All (action)
            </Button>
        </ButtonToolbar>
    );
};

export default inject('usersStore')(observer(UsersHeader));
