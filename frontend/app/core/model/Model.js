import http from '../http/Http';

export default class Models {
	constructor() {
		this.http = http;
	}

	getAll(modelUrl) {
		return this.http.get(modelUrl);
	}
}
