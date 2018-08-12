import Models from '../core/model/Model';

class Users extends Models {
	constructor() {
		super(...arguments);

		this.modelUrl = 'users';
	}
}

export default new Users();
