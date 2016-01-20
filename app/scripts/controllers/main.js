'use strict';

/**
 * @ngdoc function
 * @name yeomancodelabApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomancodelabApp
 */
angular.module('yeomancodelabApp')
    .controller('MainCtrl', function ($scope, localStorageService) {

        var todosInStore = localStorageService.get('todos');
        
        console.log($route)

        $scope.todos = todosInStore || [];

        $scope.$watch('todos', function () {
            localStorageService.set('todos', $scope.todos);
        }, true);

        $scope.addTodo = function () {
            $scope.todos.push($scope.todo);
            $scope.todo = '';
        };

        $scope.removeTodo = function (index) {
            $scope.todos.splice(index, 1);
        };

    });