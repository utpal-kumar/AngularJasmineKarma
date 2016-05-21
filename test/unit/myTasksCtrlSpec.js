/*global describe, it, beforeEach, inject, expect*/
(function () {
    'use strict';

    describe('MyTasks Controller', function () {
        var ctrl, scope;

        // Load the module containing the app, only 'ng' is loaded by default.
        beforeEach(module('mytasks'));

        beforeEach(inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();     
           
            ctrl = $controller('MyTasksCtrl', {
                $scope: scope 
            });
        }));

        it('should have two tasks', function () {
            expect(scope.tasks.length).toBe(2);
        });

        it('should add one task and count should be 3', function () {
            scope.addTask({
                taskNo: 3,
                title: "Test a task add function",
                status: 'In Test'
            });

            expect(scope.tasks.length).toBe(3);
        });

      

    });
    
}());