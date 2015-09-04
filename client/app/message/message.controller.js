'use strict';

angular.module('ourSiteApp')
  .controller('MessageCtrl', function ($scope, $http) {
    $scope.title = '留言板';

    $scope.data = [];

    $http.get('/api/messages').success(function(res) {
      $scope.data = res;
      $scope.len = res.length;

      angular.forEach($scope.data, function(item) {

        item.content = item.content.replace(/(\/images.+?gif")/g, "assets$1");
        
        angular.forEach(item.children, function(chil) {
          chil.content = chil.content.replace(/(\/images.+?gif")/g, "assets$1");
        });
        
      });

    });
  });
