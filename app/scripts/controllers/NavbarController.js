'use strict';

angular.module('testTakerApp')
  .controller('NavbarcontrollerCtrl', function ($scope, $location) {
        $scope.getClass = function (path) {
            return $location.path() == path;
        }
  });
