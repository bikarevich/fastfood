class Cart {
	constructor(currentProducts) {
		this.products = currentProducts ? currentProducts : [];
		this.totalCount = this.products.length;
	}

	get() {
		return this.products;
	}

	addProduct(product) {
		this.products.push(product);
	}

	removeProduct(product) {
		this.products = this.products.filter((x) => x != product);
	}

	updateCount() {
		this.totalCount = this.products.length;
	}
}

export { Cart };
