import { router } from './routes';
import Handlebars from 'handlebars';
import user from './components/user/User';
import cart from './components/cart/Cart';

Handlebars.registerHelper('json', (context) => {
	return JSON.stringify(context);
});

(function initComponents() {
	cart.init();
	user.init();
}) ();


router.goToRoute('user');
