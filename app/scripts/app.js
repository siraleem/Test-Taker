'use strict';

angular.module('testTakerApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'partials/login',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'partials/signup',
        controller: 'SignupCtrl'
      })
      .when('/dashboard', {
        templateUrl: 'partials/dashboard',
        controller: 'DashboardCtrl'
      })
      .when('/requests', {
        templateUrl: 'partials/requests',
        controller: 'RequestsCtrl'
      })
      .when('/members', {
        templateUrl: 'partials/members',
        controller: 'MembersCtrl'
      })
      .when('/addmember', {
        templateUrl: 'partials/addmember',
        controller: 'AddmemberCtrl'
      })
      .when('/tests', {
        templateUrl: 'partials/tests',
        controller: 'TestsCtrl'
      })
      .when('/creategroup', {
        templateUrl: 'partials/creategroup',
        controller: 'CreategroupCtrl'
      })
      .when('/createtest', {
        templateUrl: 'partials/createtest',
        controller: 'CreatetestCtrl'
      })
      .when('/addtopic', {
        templateUrl: 'partials/addtopic',
        controller: 'AddtopicCtrl'
      })
      .when('/addsubtopic', {
        templateUrl: 'partials/addsubtopic',
        controller: 'AddsubtopicCtrl'
      })
      .when('/addquestion', {
        templateUrl: 'partials/addquestion',
        controller: 'AddquestionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  });
