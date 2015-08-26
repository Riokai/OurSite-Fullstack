'use strict';

angular.module('ourSiteApp')
  .controller('MessageCtrl', function ($scope, $http) {
    $scope.title = '留言板';

    $scope.data = [];

    $http.get('/api/messages').success(function(res) {
    	console.log(res);
      $scope.data = res;
      $scope.len = res.length;

    });
  });
