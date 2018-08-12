import http from '../http/Http';

export default class Models {
	constructor() {
		this.http = http;
	}

	getAll() {
		return this.http.get(this.modelUrl);
	}

	create(data) {
		return this.http.post(this.modelUrl, data);
	}
}
