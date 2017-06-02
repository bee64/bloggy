export default class User {
	constructor(AppConstants, JWT,  $http, $state, $q) {
		'ngInject';

		this._AppConstants = AppConstants;
		this._JWT = JWT;
		this._$http = $http;
		this._$state = $state;
		this._$q = $q;

		// Information about the current user
		this.current = null;
	}

	update(fields) {
		return this._$http({
			url: this._AppConstants.api + '/user',
			method: 'PUT',
			data: {user: fields}
		}).then(
			(res) => {
				this.current = res.data.user;
				return this.current;
			}
		);
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
				this.current = res.data.user;
				this._JWT.save(this.current.token);
				return res;
			}
		);
	}

	verifyAuth() {
		let deferred = this._$q.defer();
		if(!this._JWT.get()) {
			deferred.resolve(false);
			return deferred.promise;
		}

		if(this.current) {
			// JWT token && User exist
			deferred.resolve(true);
		} else {
			this._$http({
				url: this._AppConstants.api + '/user',
				method: 'GET'
			})
			.then(
			(res) => {
				this.current = res.data.user;
				deferred.resolve(true);
			},
			(err) => {
				this._JWT.destroy();
				deferred.resolve(false);
			});
		}
		return deferred.promise;
	}

	ensureAuthIs(state) {
		let deferred = this._$q.defer();

		this.verifyAuth().then(
			(authValid) => {
				if(authValid !== state) {
					this._$state.go('app.home');
					deferred.resolve(false);
				} else {
					deferred.resolve(true);
				}
			});
		return deferred.promise;
	}

	logOut() {
		this.current = null;
		this._JWT.destroy();
		// Hard state reload
		this._$state.go(this._$state.current, {}, {reload: true});
	}
}