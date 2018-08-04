import Router from '../core/Router';
import template1Controller from '../controllers/template1';
import template2Controller from '../controllers/template2';

const routes = {
	'template1': {
		templateUrl: '/../templates/template1.html',
		controller: template1Controller,
		url: 'template1'
	},
	'template2': {
		templateUrl: '/../templates/template2.html',
		controller: template2Controller,
		url: 'template2'
	}
};

const router = new Router(routes);
router.init();

export { router };
