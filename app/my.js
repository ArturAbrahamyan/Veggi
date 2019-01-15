'use strict';
var app=angular.module('myApp',['ngRoute']);

app.config('$routeProvider',function($routeProvider){

    $routeProvider.when('/home',{

        templateUrl:'view1/view1.html'
    }).when('/features',{
        templateUrl:'view2/view2.html'

    }).
    otherwise({
        redirectTo: '/home'
    });
});
