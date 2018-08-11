import Handlebars from 'handlebars';
import utils from '../utils';

export default class Component {
	constructor(templateUrl, tagName) {
		this.tagName = tagName;
		this.templateUrl = templateUrl;
	}

	init() {
		document.registerElement(this.tagName);
		this.render();
	}

	async render() {
		const wrapper = document.getElementsByTagName(this.tagName)[0];
		const html = await utils.fetchHtml(this.templateUrl);
		const compiledHtml = Handlebars.compile(html);
		const template = compiledHtml(this._data);
		wrapper.innerHTML = '';
		wrapper.insertAdjacentHTML('afterbegin', template);
	}
}
