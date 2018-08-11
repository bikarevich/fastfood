import Route from '../core/router/Route';
import template2Controller from '../controllers/template2';

class template2 extends Route {
	constructor() {
		super(...arguments);
	}
	model() {
		return Promise.resolve(
			{
				model: {
					users: [
						{ name: 'Sasha' }
					]
				}
			}
		);
	}
}

export default new template2('/../templates/template2.html', template2Controller, 'template2');
