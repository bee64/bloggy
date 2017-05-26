import angular from 'angular';

let componentsModule = angular.module('app.components', []);

// Import components
import ListErrors from './list-errors.component.js';
componentsModule.component('listErrors', ListErrors);

import ShowAuthed from './show-authed.directive.js';
componentsModule.directive('showAuthed', ShowAuthed);

export default componentsModule;
