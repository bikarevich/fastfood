import Handlebars from 'handlebars';
import utils from '../utils';
import { settings } from '../../settings';

export default class Controller {
	constructor(templateUrl, model) {
		this.templateUrl = templateUrl;
		this.model = model;
	}

	init() {
		this.render();
	}

	_setModel(model) {
		this.model = model;
	}

	async render() {
		const wrapper = document.getElementById(settings.wrapperId);
		const html = await utils.fetchHtml(this.templateUrl);
		const compiledHtml = Handlebars.compile(html);
		const template = compiledHtml(this.model);
		wrapper.insertAdjacentHTML('afterbegin', template);
	}
}
