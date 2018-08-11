import { settings } from '../../settings';
class Http {
	constructor() {
		this.params = {
			'mode': 'cors',
			headers: {
				'content-type': 'application/json; charset=UTF-8'
			}
		};
	}

	get(url) {
		const queryUrl = this._getQueryUrl(url);
		const params = Object.assign({}, this.params, {
			method: "GET"
		});

		return this._sendRequest(queryUrl, params);
	}

	post(url, reqData = {}) {
		const queryUrl = this._getQueryUrl(url);
		const params = Object.assign({}, this.params, {
			method: 'POST',
			body: reqData
		});

		return this._sendRequest(queryUrl, params);
	}

	put(url, reqData = {}) {
		const queryUrl = this._getQueryUrl(url);
		const params = Object.assign({}, this.params, {
			method: 'PUT',
			body: reqData
		});

		return this._sendRequest(queryUrl, params);
	}

	_getQueryUrl(url) {
		return settings.apiUrl + url;
	}

	_sendRequest(queryUrl, params) {
		return fetch(queryUrl, params)
			.then((response) => {
				return response.json();
			}).then((data) => {
				return data;
			});
	}
}

export default new Http();

