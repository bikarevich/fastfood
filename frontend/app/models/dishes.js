import Models from '../core/model/Model';

class Dishes extends Models {
	constructor() {
		super(...arguments);
	
		this.modelUrl = 'dishes';
	}
}

export default new Dishes();
