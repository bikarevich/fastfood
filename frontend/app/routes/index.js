import Router from '../core/router/Router';
import { loader } from '../core/loader/Loader';
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

const router = new Router(routes, loader);
router.init();

export { router };
