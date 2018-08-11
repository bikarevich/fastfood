
import utils from '../utils';
import routerUtils from './utils';
import { settings } from '../../settings';

export default class Router {
	constructor(routes, loader) {
		this.routes = routes;
		this.loader = loader;
		this.controllers = [];
	}

	init() {
		this._activateLinkToButtons();
	}

	goToRoute(routeName) {
		const route = this.routes[routeName];

		this.loader.show();
		utils.clearDomElement(settings.wrapperId);
		this._initController(route);
		routerUtils.changeUrl(route.url);
		this.loader.hide();
	}

	async _initController(route) {
		const templateUrl = route.templateUrl;
		const Controller = route.controller;
		const model = await route.model();
		const controller = new Controller(templateUrl, model);
		controller.init();
	}

	_activateLinkToButtons() {
		utils.addEventListener('.linkTo', 'click', this._routeToAction, this);
	}

	_routeToAction(evt) {
		evt.preventDefault();
		this.goToRoute(evt.target.attributes.route.value);
	}
}
