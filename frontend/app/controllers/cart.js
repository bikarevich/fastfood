import Controller from '../core/controller/Controller';
import cart from '../components/cart/Cart';

export default class cartController extends Controller {
	constructor() {
		super(...arguments);

		this.actions = {
			addCartItem: (item) => {
				cart.addItem(item);
				this.reRender({ dishes: cart.getSortedOrderDetails() });
			},
			removeCartItem: (item) => {
				cart.removeItem(item);
				this.reRender({ dishes: cart.getSortedOrderDetails() });
			}
		};
	}
}
