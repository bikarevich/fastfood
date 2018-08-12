import Component from '../../core/component/Component';

class Cart extends Component {
	constructor(templateUrl, tagName){
		super(templateUrl, tagName);

		if (!Cart.instance){
			this._data = [];
			this.wrapper = document.getElementsByTagName(this.tagName)[0];
			Cart.instance = this;
		}

		return Cart.instance;
	}

	addItem(data) {
		this._data.push(JSON.parse(data));
		this.render();
	}

	removeItem(id) {
		let items = this._data;

		for (let i=0; i < items.length; i++) {
			if (items[i].id == id) {
				items.splice(i, 1);
				break;
			}
		}

		this._data = items;
		this.render();
	}

	getOrderDetails() {
		return this._data;
	}

	getSortedOrderDetails() {
		return this._sortOrderItems(this._data);
	}

	_sortOrderItems(items) {
		const result = [];
		const groupedItems = this._groupBy(items, 'id');
		groupedItems.forEach((item) => {
			item[0].total = item.length;
			result.push(item[0]);
		});

		return result;
	}
	_groupBy(list, property) {
		const map = new Map();
		list.forEach((item) => {
			const key = item[property];
			const collection = map.get(key);
			if (!collection) {
				map.set(key, [item]);
			} else {
				collection.push(item);
			}
		});
		return map;
	}
}

const instance = new Cart('components/cart/cart-template.html', 'cart-component');

export default instance;
