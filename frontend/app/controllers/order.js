import Controller from '../core/controller/Controller';
import cart from '../components/cart/Cart';

export default class orderController extends Controller {
	constructor() {
		super(...arguments);

		this.actions = {
			addCartItem: (item) => {
				cart.addItem(item);
			},
			removeCartItem: (item) => {
				cart.removeItem(item);
			}
		};
	}
}
