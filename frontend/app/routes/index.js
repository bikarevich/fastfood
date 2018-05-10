import { Router } from '../core/Router';
import { template1Controller } from '../controllers/template1';
import { template2Controller } from '../controllers/template2';

const routes = {
	'template1': {
		template: 'app/templates/template1.html',
		controller: template1Controller
	},
	'template2': {
		template: 'app/templates/template2.html',
		controller: template2Controller
	}
};
const router = new Router(routes);

export { router };
