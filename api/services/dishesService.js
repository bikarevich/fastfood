const db = require('../models');

class DishesService {
	constructor({ dishes }) {
		this.dishesRepo = dishes;
	}

	getAll(){
		return this.dishesRepo.findAll();
	}
}

module.exports = new DishesService(db);
