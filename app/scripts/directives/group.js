'use strict';

angular.module('testTakerApp')
  .directive('group', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the group directive');
      }
    };
  });
