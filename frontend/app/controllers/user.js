import Controller from '../core/controller/Controller';
import usersModel from '../models/users';
import user from '../components/user/User';
import { router } from '../routes';

export default class userController extends Controller {
	constructor() {
		super(...arguments);
	
		this.actions = {
			selectExisting: (selected) => {
				const existUser = JSON.parse(selected.value);
				user.set(existUser);
				router.goToRoute('order');
			},
			createNewUser: () => {
				const val = document.getElementById('clientName').value;
				if (val && val.length > 1) {
					usersModel.create({ name: val }).then((newUser) => {
						user.set(newUser);
						router.goToRoute('order');
					});
				} else {
					alert('Please enter a client name (min 2 symbols)');
				}
			}
		};
	}
}
