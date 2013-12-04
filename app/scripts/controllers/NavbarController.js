'use strict';

angular.module('testTakerApp')
  .controller('NavbarcontrollerCtrl', function ($scope, $location) {
        $scope.getClass = function (path) {
            if ($location.path().substr(0, path.length) == path) {
                return true
            } else {
                return false;
            }
        }
  });
