import Component from '../../core/component/Component';

class User extends Component {
	constructor(templateUrl, tagName){
		super(templateUrl, tagName);

		if (!User.instance){
			this._data = {
				user: {}
			};
			this.wrapper = document.getElementsByTagName(this.tagName)[0];
			User.instance = this;
		}

		return User.instance;
	}

	set(user) {
		this._data.user = user;
		this.update();
	}

	get() {
		return this._data.user;
	}
}

const instance = new User('components/user/user-template.html', 'user-component');
Object.freeze(instance);

export default instance;
