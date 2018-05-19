export default class Router {
	constructor(routes) {
		this.routes = routes;
		this.controllers = [];
	}

	navigate(routeName) {
		const route = this.routes[routeName];
		const template = route.template;
		const Controller = route.controller;
		const model = this._getModel();
		const controller = new Controller(template, model);
		controller.init();
	}

	_getModel() {
		return [
			{ name: 'Sasha' },
			{ name: 'Vasya' },
			{ name: 'Petya' },
			{ name: 'Igor' }
		];
	}
}
