import Route from '../core/router/Route';
import orderController from '../controllers/order';
import dishesModel from '../models/dishes';

class Order extends Route {
	constructor() {
		super(...arguments);
	}
	model() {
		return dishesModel.getAll().then((dishes) => {
			return { dishes };
		});
	}
}

export default new Order('/../templates/order.html', orderController, 'order');
