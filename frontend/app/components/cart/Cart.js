import Component from '../../core/component/Component';

class Cart extends Component {
	constructor(templateUrl, tagName){
		super(templateUrl, tagName);

		if (!Cart.instance){
			this._data = [];
			Cart.instance = this;
		}

		return Cart.instance;
	}

	addItem(data) {
		this._data.push(data);
		this.render();
	}

	removeItemItem(id) {
		this._data = this._data.filter((item) => !item.id !== id);
		this.render();
	}
}

const instance = new Cart('components/cart/cart-template.html', 'cart-component');
Object.freeze(instance);

export default instance;
