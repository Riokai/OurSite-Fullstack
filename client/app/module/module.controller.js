'use strict';

angular.module('ourSiteApp')
  .controller('ModuleCtrl', function ($scope, $http, socket) {

  	$scope.modules = [];

    $http.get('/api/modules').success(function(res) {

    	$scope.modules = res;

    });

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
