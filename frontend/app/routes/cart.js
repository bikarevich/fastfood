import Route from '../core/router/Route';
import cartController from '../controllers/cart';
import cart from '../components/cart/Cart';

class Cart extends Route {
	constructor() {
		super(...arguments);
	}
	model() {
		const orderList = cart.getSortedOrderDetails();
		return Promise.resolve({ dishes: orderList });
	}
}

export default new Cart('/../templates/cart.html', cartController, 'cart');
