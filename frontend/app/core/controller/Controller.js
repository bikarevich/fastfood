import Handlebars from 'handlebars';
import utils from '../utils';
import { settings } from '../../settings';

export default class Controller {
	constructor(templateUrl, model) {
		this.templateUrl = templateUrl;
		this.model = model;
		this.wrapper = document.getElementById(settings.wrapperId);
	}

	async init() {
		await this.render();
		utils.addEventListeners(this.actions, this.wrapper, this);
	}

	async render() {
		this.html = await utils.fetchHtml(this.templateUrl);
		this.compiledHtml = Handlebars.compile(this.html);
		const template = this.compiledHtml(this.model);
		this.wrapper.insertAdjacentHTML('afterbegin', template);
	}

	reRender(data) {
		const template = this.compiledHtml(data);
		this.wrapper.innerHTML = '';
		this.wrapper.insertAdjacentHTML('afterbegin', template);
		utils.addEventListeners(this.actions, this.wrapper, this);
	}
}
