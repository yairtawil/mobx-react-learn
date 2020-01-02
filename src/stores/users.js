import { action, observable } from 'mobx';
import faker from 'faker';

class Users {
    @observable users = new Array(8).fill(null).reduce((prev) => {
        const user = this._generateUser();
        return { ...prev, [user.id]: user };
    }, {});

    _generateUser = () => {
        const id = faker.random.uuid();
        const name = faker.name.findName();
        const email = faker.internet.email();
        const country = faker.address.country();

        return { id, name, email, country };
    };

    @action addUser = () => {
        const user = this._generateUser();
        this.users[user.id] = user;
    };

    @action removeUser = (id) => {
        delete this.users[id];
    };

    @action clearAll = () => {
        this.users = {};
    };
}

export default Users;
