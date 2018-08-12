import Router from '../core/router/Router';
import { loader } from '../core/loader/Loader';
import order from './order';
import cart from './cart';
import user from './user';

const routes = {
	order,
	cart,
	user
};

const router = new Router(routes, loader);
router.init();

export { router };
