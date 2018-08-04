import utils from './utils';
import { settings } from '../settings';

export default class Controller {
	constructor(templateUrl, model) {
		this.templateUrl = templateUrl;
		this.model = model;
	}

	init() {
		console.log('Controller init');
		this.render();
	}

	_setModel(model) {
		this.model = model;
	}

	async render() {
		const wrapper = document.getElementById(settings.wrapperId);
		const html = await utils.fetchHtml(this.templateUrl);
		wrapper.insertAdjacentHTML('afterbegin', html);
	}
}
