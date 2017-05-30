function AuthConfig($stateProvider, $httpProvider) {
	'ngInject';

	// Define routes
	$stateProvider
		.state('app.login', {
			url: '/login',
			templateUrl: 'auth/auth.html',
			title: 'Sign in',
			controller: 'AuthCtrl as $ctrl',
			resolve: {
				auth: function(User) {
					return User.ensureAuthIs(false);
				}
			}
		})
		.state('app.register', {
			url: '/register',
			templateUrl: 'auth/auth.html',
			title: 'Register',
			controller: 'AuthCtrl as $ctrl',
			resolve: {
				auth: function(User) {
					return User.ensureAuthIs(false);
				}
			}
		});
};

export default AuthConfig;