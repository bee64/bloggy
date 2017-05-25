function AuthConfig($stateProvider, $httpProvider) {
	'ngInject';

	// Define routes
	$stateProvider
		.state('app.login', {
			url: '/login',
			templateUrl: 'auth/auth.html',
			title: 'Sign in'
		})
		.state('app.register', {
			url: '/register',
			templateUrl: 'auth/auth.html',
			title: 'Register'
		});
};

export default AuthConfig;