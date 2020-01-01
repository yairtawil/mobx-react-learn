import { action, observable } from 'mobx';

class Users {
    @observable users = {
        Dan: {
            name: 'Dan'
        },
        Michel: {
            name: 'Michel'
        },
        Yair: {
            name: 'Yair'
        }
    };

    @action addUser = (user) => {
        this.users[user.name] = user;
    };

    @action removeUser = (name) => {
        delete this.users[name];
    };
}

export default Users;
