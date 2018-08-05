import { settings } from '../../settings';

export default class Http {
	constructor() {
		this.params = {
			headers: {
				'content-type': 'application/json; charset=UTF-8'
			}
		};
	}

	get(url, query = {}) {
		const queryUrl = this._getQueryUrl(url);
		const params = Object.assign({}, this.params, {
			method: 'GET',
			query
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

	_getQueryUrl(url) {
		return settings.apiUrl + url;
	}

	_sendRequest(queryUrl, params) {
		return fetch(queryUrl, params)
			.then((data) => {
				return data.json();
			})
			.catch((error) => {
				return error;
			});
	}
}

const http = new Http();

export { http };

