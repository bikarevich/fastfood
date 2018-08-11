import Route from '../core/router/Route';
import template1Controller from '../controllers/template1';
import dishesModel from '../models/dishes';

class template1 extends Route {
	constructor() {
		super(...arguments);
		this.modelUrl = 'dishes';
	}
	model() {
		return dishesModel.getAll(this.modelUrl).then((dishes) => {
			return { dishes };
		});
	}
}

export default new template1('/../templates/template1.html', template1Controller, 'template1');
