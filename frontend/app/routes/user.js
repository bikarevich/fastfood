import Route from '../core/router/Route';
import userController from '../controllers/user';
import usersModel from '../models/users';

class User extends Route {
	constructor() {
		super(...arguments);
	}
	model() {
		return usersModel.getAll().then((users) => {
			return { users };
		});
	}
}

export default new User('/../templates/user.html', userController, 'user');
