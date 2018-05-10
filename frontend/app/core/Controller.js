class Controller {
	constructor(template) {
		this.template = template;
		this.wrapperId = 'page-content';
	}

	init() {
		this.render();
	}

	render() {
		document.getElementById(this.wrapperId).appendChild(this.template);
	}
}

export { Controller };
