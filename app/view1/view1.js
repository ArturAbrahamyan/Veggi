'use strict';

var app= angular.module('myApp.view1', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {

    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'

  }).otherwise({redirectTo: '/view1'});
  
}]);

app.controller('View1Ctrl', function($scope) {

        console.log("view1");



});
