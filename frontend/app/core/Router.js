
import utils from './utils';
import { settings } from '../settings';

export default class Router {
	constructor(routes) {
		this.routes = routes;
		this.controllers = [];
	}

	init() {
		console.log('Router init');
		this._activateLinkToButtons();
	}

	goToRoute(routeName) {
		utils.clearDomElement(settings.wrapperId);
		const route = this.routes[routeName];
		const templateUrl = route.templateUrl;
		const Controller = route.controller;
		const model = this._getModel();
		const controller = new Controller(templateUrl, model);
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

	_activateLinkToButtons() {
		utils.addEventListener('.linkTo', 'click', this._routeToAction, this);
	}

	_routeToAction(evt) {
		evt.preventDefault();
		this.goToRoute(evt.target.attributes.route.value);
	}
}
