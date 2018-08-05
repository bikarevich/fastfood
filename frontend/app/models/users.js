import Model from '../core/model';

class Users extends Model {
	constructor() {
		super();
		this.modelName = 'users';
	}
}

const users = new Users();

export { users };
