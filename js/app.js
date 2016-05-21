/*global angular */

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
angular.module('todomvc', ['ngRoute', 'ngResource'])
	.config(function ($routeProvider) {
		'use strict';

		var routeConfig = {
			controller: 'TodoCtrl',
			templateUrl: 'todomvc-index.html',
			resolve: {
				store: function (todoStorage) {
					// Get the correct module (API or localStorage).
					return todoStorage.then(function (module) {
						module.get(); // Fetch the todo records in the background.
						return module;
					});
				}
			}
		};

		var myTasks = {
		    controller: 'MyTasksCtrl',
		    templateUrl: 'views/mytasks-index.html'
		};

		$routeProvider
			.when('/', routeConfig)
			.when('/:status', routeConfig)
            .when("/mytasks", myTasks)
			.otherwise({
				redirectTo: '/'
			});
	});



angular.module('mytasks', ['ngRoute', 'ngResource'])
	.config(function ($routeProvider) {
	    'use strict';

	    var myTasks = {
	        controller: 'MyTasksCtrl',
	        templateUrl: 'views/mytasks-index.html'
	    };

	    $routeProvider
            .when("/", myTasks)
			.otherwise({
			    redirectTo: '/'
			});
	});
