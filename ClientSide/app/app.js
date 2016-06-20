"use strict";

let Countered = angular.module('NotDolls', [
		'ngRoute'
	]);

Countered.config(['$routeProvider',
	function ($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl : 'partials/main.html',
				controller: 'MainController'
			})
			.when('/matchup', {
				templateUrl : 'partials/matchup.html',
				controller: 'MatchupController'
			})
			// .when('/register', {
			// 	templateUrl : 'partials/register.html',
			// 	controller: 'RegistrationController'
			// })
			.otherwise('/');
	}])