import { action, observable } from 'mobx';
import faker from 'faker';

class Users {
    @observable users = new Map(
        new Array(8).fill(null).map(() => {
            const user = this._generateUser();
            return [user.id, user];
        })
    );

    @observable checked = new Set();

    _generateUser = () => {
        const id = faker.random.uuid();
        const name = faker.name.findName();
        const email = faker.internet.email();
        const country = faker.address.country();

        return { id, name, email, country };
    };

    @action addUser = () => {
        const user = this._generateUser();
        this.users.set(user.id, user);
    };

    @action removeChecked = () => {
        Array.from(this.checked).forEach(id => {
            this.users.delete(id);
            this.checked.delete(id);
        });
    };

    @action clearAll = () => {
        this.users = new Map();
        this.checked = new Set();
    };

    @action toggleAll = () => {
        if (this.checked.size === this.users.size) {
            this.checked = new Set();
        } else {
            this.checked = new Set(Array.from(this.users.keys()));
        }
    };

    @action toggleCheck = (id) => () => {
        if (this.checked.has(id)) {
            this.checked.delete(id);
        } else {
            this.checked.add(id);
        }
    };
}

export default Users;
