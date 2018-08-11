import Router from '../core/router/Router';
import { loader } from '../core/loader/Loader';
import template1 from './template1';
import template2 from './template2';

const routes = {
	template1,
	template2
};

const router = new Router(routes, loader);
router.init();

export { router };
