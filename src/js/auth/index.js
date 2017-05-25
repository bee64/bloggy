import angular from 'angular';

let authModule = angular.module('app.auth', []);

// Import Config
import AuthConfig from './auth.config.js';
authModule.config(AuthConfig);

// Import Controller
import AuthCtrl from './auth.controller.js';
authModule.controller('AuthCtrl', AuthCtrl);

export default authModule;