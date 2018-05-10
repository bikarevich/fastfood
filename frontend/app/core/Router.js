class Router {
	constructor(routes) {
		this.routes = routes;
	}

	navigate(routeName) {
		const route = this.routes[routeName];
		route.init(route.template);
	}
}

export { Router };
