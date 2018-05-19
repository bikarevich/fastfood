export default class Controller {
	constructor(template, model) {
		this.template = template;
		this.wrapperId = 'page-content';
		this.model = model;
	}

	init() {
		this.render();
	}

	_setModel(model) {
		this.model = model;
	}

	render() {
		const wrapper = document.getElementById(this.wrapperId);
		
		wrapper.appendChild(this.template);
	}
}
