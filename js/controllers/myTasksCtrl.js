 
angular.module('mytasks')
	.controller('MyTasksCtrl', function($scope) {
	    'use strict';

	    $scope.tasks = [
            {
                taskNo: 1,
                title: "Make a angular jasmine test sample app",
                status: 'In Progress'
            },
            {
                taskNo: 2,
                title: "Find some todo application sample for standard javascript frameworks.",
                status: 'Completed'
            }
	    ];

	    $scope.addTask = function (task) {
	        $scope.tasks.push(task);
	    }

	});