'use strict';

angular.module('testTakerApp')
  .controller('MainCtrl', function ($scope, $http, Templateservice, Groupservice) {
    /*$http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
    */
    $http.get('/api/portalUsers').success(function(users) {
      $scope.users = users;
    });

    $scope.loadMore = function(){
        $scope.groups = Groupservice.getGroups();//.splice(0, scope.maxSize);
        $scope.template = Templateservice.getGroupTemplate();
    };
  });
