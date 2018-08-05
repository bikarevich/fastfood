class Loader {
	constructor() {
		this.loaderEl = null;
	}

	init() {
		this.render();
	}

	render() {
		const wrapper = document.getElementsByTagName('body');
		const html = '<div class="loader" id="loader"></div>';
		wrapper[0].insertAdjacentHTML('beforeend', html);
		this.loaderEl = document.getElementById('loader');
	}

	show() {
		this.loaderEl.classList.add('visible');
	}

	hide() {
		this.loaderEl.classList.remove('visible');
	}
}

const loader = new Loader();
loader.init();

export { loader };
