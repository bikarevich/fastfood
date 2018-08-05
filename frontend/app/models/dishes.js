import Model from '../core/model';

class Dishes extends Model {
	constructor() {
		super();
		this.modelName = 'dishes';
	}
}

const dishes = new Dishes();

export { dishes };
