const db = require('../models');

class UsersService {
	constructor({ users }) {
		this.usersRepo = users;
	}

	getAll(){
		return this.usersRepo.findAll();
	}

	create(data){
		return this.usersRepo.create(data);
	}
}

module.exports = new UsersService(db);
