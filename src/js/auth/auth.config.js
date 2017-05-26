function AuthConfig($stateProvider, $httpProvider) {
	'ngInject';

	// Define routes
	$stateProvider
		.state('app.login', {
			url: '/login',
			templateUrl: 'auth/auth.html',
			title: 'Sign in',
			controller: 'AuthCtrl as $ctrl'
		})
		.state('app.register', {
			url: '/register',
			templateUrl: 'auth/auth.html',
			title: 'Register',
			controller: 'AuthCtrl as $ctrl'
		});
};

export default AuthConfig;