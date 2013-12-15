'use strict';

angular.module('testTakerApp')
  .service('Templateservice', function Templateservice() {
    this.getGroupTemplate = function(){
        return '<div class="row">'
            + '<div class="col-md-3 col-md-offset-1 panel panel-primary" ng-repeat="grp in groups">'
            + '<div class="panel-heading"><span class="glyphicon glyphicon-book"></span> {{grp.groupName}}</div>'
            + '<div class="panel-body">Members : {{grp.groupMembers.length}}</div>'
            + '<div class="panel-body">Tests : {{grp.groupTests.length}}</div>'
            + '</div>'
            + '</div>'
        + '</div> ';
    };
  });
