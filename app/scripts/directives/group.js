'use strict';

angular.module('testTakerApp')
  .directive('group', function ($compile) {
    return {
      scope: true,
      restrict: 'E',
        link:function(scope, element, attributes){
            var elem;

            attributes.$observe('template', function(tpl){
                if(angular.isDefined(tpl)){
                    elem = $compile(tpl)(scope);
                    element.html('');
                    element.append(elem);
                }
            });
            attributes.$observe('max', function(sze){
                if(angular.isDefined(sze)){
                    scope.max = int.parse(sze);
                    console.log('max is ' + scope.max);
                }
            });
        }
    };
  });
