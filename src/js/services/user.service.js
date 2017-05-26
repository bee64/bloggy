export default class User {
	constructor(AppConstants, $http) {
		'ngInject';

		this._AppConstants = AppConstants;
		this._$http = $http;

		// Information about the current user
		this.current = null;
	}

	attemptAuth(type, credentials) {
		let route = (type === 'login') ? '/login' : '';
		return this._$http({
			url: this._AppConstants.api + '/users' + route,
			method: 'POST',
			data: {
				user: credentials
			}
		})
		.then(
			(res) => {
				// Store user info after login
				this.current = res.data.user
				return res;
			}
		);
	}
}